---
layout: post
title:  "Creating a ServiceStack Windows Service that uses Quartz"
description:  "How I built my ServiceStack with Quartz Nuget package"
date:   2016-07-05
tags: old blog
category: Learning
timeToRead: 5 minutes
---
I've been using Quartz.Net in a prototype project for the last few months  which somehow made it from prototyping stages directly to production.  I’ve found some free time and have decided to port the application over to run on the ServiceStack framework for Windows Services to allow for some easier development.  During my experimental stages I was trying to find a way to “Hook-up” Quartz with the ServiceStack built-in IoC (Funq) and I’ve built a library that enables people to do so easily.  It is below:

- **Github**: github.com/mikesglitch/ServiceStackWithQuartz
- **NuGet**: www.nuget.org/packages/ServiceStack.Funq.Quartz

Keep in mind that this was built for use in my own project, and if you can think of a way to improve it , I welcome contributions/forks – if you can make it better, please do.

## How to use it
If you're using the library, all you need to do to register your Quartz with ServiceStack’s Funq implementation is the following:

```csharp
//// Add the using
using ServiceStack.Funq.Quartz;
 
//// This method scans the assembly for the Jobs
container.RegisterQuartzScheduler(typeof(HelloJob));
 
//// Resolve the Quartz Scheduler as normal
var scheduler = container.Resolve<IScheduler>();
 
//// Start Quartz Scheduler
scheduler.Start();
```

## How it was built

Firstly, I built myself a job that I wanted to make work:

```csharp
public class HelloJob : IJob
{
    private MyServices MyServices { get; set; }
    public HelloJob(MyServices myServices)
    {
        MyServices = myServices;
    }
 
    public virtual void Execute(IJobExecutionContext context)
    {
        var response = MyServices.Any(new ServiceModel.Hello
        {
            Name = "mikesglitch"
        });
 
        response.PrintDump();
    }
}
```

This of course would **not** work because Quartz by itself will not allow you to use injected services within Job Execution.

Then, I found that in order for Quartz to resolve the dependencies along with the Job I needed a FunqJobFactory that implemented Quartz’s IJobFactory.  So what I’m doing here is I’m using the Funq container to resolve the “HelloJob” along with it’s dependencies whenever the Quartz scheduler wants to fire any Job.  I then return that fully resolved Job.

```csharp
public class FunqJobFactory : IJobFactory
{
    private readonly Container _container;
 
    public FunqJobFactory(Container container)
    {
        _container = container;
    }
 
    public IJob NewJob(TriggerFiredBundle bundle, IScheduler scheduler)
    {
        if (bundle == null) throw new ArgumentNullException(nameof(bundle));
        if (scheduler == null) throw new ArgumentNullException(nameof(scheduler));
 
        var jobDetail = bundle.JobDetail;
        var newJob = (IJob)_container.TryResolve(jobDetail.JobType);
 
        if (newJob == null)
            throw new SchedulerConfigException(string.Format("Failed to instantiate Job {0} of type {1}", jobDetail.Key, jobDetail.JobType));
 
        return newJob;
    }
 
    public void ReturnJob(IJob job)
    {
    }
}
```

All I needed to do after this was provide an easy way for registering the Quartz Scheduler and all Jobs.  I wanted to keep the registration true-to-form with ServiceStack so I made a nice extension method to keep it nice and simple.  This way, registering Quartz  is as easy as calling the method and providing a Type that’s within the same assembly as the Quartz Jobs.

```csharp
public static void RegisterQuartzScheduler(this Container container, Type jobsAssembly, NameValueCollection quartzConfig = null)
{
    if (jobsAssembly == null) throw new ArgumentNullException(nameof(jobsAssembly));
 
    container.RegisterAs<FunqJobFactory, IJobFactory>();
    jobsAssembly.Assembly.GetTypes()
        .Where(type => !type.IsAbstract && typeof(IJob).IsAssignableFrom(type))
        .Each(x => container.RegisterAutoWiredType(x));
 
    ISchedulerFactory schedFact = quartzConfig != null
        ? new StdSchedulerFactory(quartzConfig)
        : new StdSchedulerFactory();
 
    IScheduler scheduler = schedFact.GetScheduler();
    scheduler.JobFactory = container.Resolve<IJobFactory>();
    container.Register<IScheduler>(scheduler);
}
```

And that was that!  Again, if you’re thinking of hooking up your Quartz Service with the ServiceStack Funq container feel free to use this and if you want to modify it, feel free to that as well.

