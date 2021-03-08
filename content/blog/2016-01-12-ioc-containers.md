---
layout: post
title:  "What IoC Containers are and what they aren't"
img: "/blog-assets/ioc.jpg"
date:   2016-01-12 17:58:09 +0100
categories: old-blog
timeToRead: 5 minutes
---
The term IoC or "Inversion of Control" is used to describe a design in which custom-written portions of a computer program receive the *FLOW OF CONTROL* from a generic, reusable library.

A software application with this design inverts control as opposed to the traditional “Procedural Programming”.  With Procedural Programming the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with Inversion of Control, it is the reusable code that calls into the custom/task specific code.

### Procedural Example (C#)
```csharp
public class WebUserContext : IUserContext
{
    public WebUserContext( )
    {
        _userAccountService = new UserAccountService(new MongoReadOnlyRepository());
    }

    private readonly IUserAccountService _userAccountService;
}
```

### IoC Example (C#)
```csharp
public class WebUserContext : IUserContext
{
    public WebUserContext(IUserAccountService userAccountService)
    {
        _userAccountService = userAccountService;
    }

    private readonly IUserAccountService _userAccountService;
}
```

## Dependency Injection != Using an IoC container
- It is possible to use dependency injection without the need for an IoC container.
- You can also use an IoC container without doing dependency injection, which is very common and is considered bad practice.

By far the most common IoC mistake is to wrap up the container in a **public static singleton** class that is referenced throughout the code base.  This is **NOT** dependency injection and is instead known as **Service Location** and is widely considered an anti-pattern.

When given the choice between constructor injection and the Service Locator, it is always the best option to use constructor injection.  The reasons are as follows:

- The Service Locator **hides dependencies**
- The Service Locator **is in itself a dependency**
- **It is harder to write tests** for objects using the Service Locator
- Dependency Injection **reveals dependencies**
- Dependency injection is **not in itself a dependency**
- **Its easier to write tests, fakes, etc** with dependency injection

Another major point is when dependencies change for a class where the Service Locator is used there will not always be build failures (immediate feedback) in other projects that are calling that class (such as Unit tests).  Build failures are a good thing for problems like this as they reduce the chance of problem code making its way into production.

If the programmer is willing to overlook the problems with the Service Locator pattern  then perhaps it is worth considering.  As with everything, we need to understand the pros and cons of each tool we use so that we can make informed choices.

### Service Location example
```csharp
public class WebUserContext : IUserContext
{
    public WebUserContext( )
    {
        _userAccountService = Locator.Resolve<UserAccountService>();
    }

    private readonly IUserAccountService _userAccountService;
}
```

## Dynamic component resolution
A common requirement is to be able to create an object based on data that can only be known at run-time.  A slight variation of this is that if you have a component that is expensive to create, so you may want to delay the instantiation of this object until it is required.  Both of these scenarios can be easily handled without resorting to accessing the container deep within your code.   The answer is factories, which I will explain in a later post.
