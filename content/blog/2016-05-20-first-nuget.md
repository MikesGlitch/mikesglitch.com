---
layout: post
title:  "My first NuGet and a busy week at work"
date:   2016-05-20
tags: old blog
timeToRead: 5 minutes
---
I just got finished with my first public NuGet package this morning (YAY for me!).  Its purpose is to provide an easy way to register Quartz with ServiceStack’s default IoC container (Funq).  It’s something I was going to have to do anyway because at work I’m porting our “Integration Service” scheduler (which uses Quartz) over to a ServiceStack Windows Service.  I noticed a couple of people asking questions about using Quartz with ServiceStack on StackOverflow and though it might help to add a library for it.

It was an interesting experience setting it all up.  I couldn’t believe there was a free way of running Continuous Integration on Github with AppVeyor – that must cost them a fortune to run for so many users!    Also, setting up a NuGet had a learning curve – It didn’t take too long with the help of an VS extension but it was interesting nonetheless.

The project can be viewed here:
- www.github.com/mikesglitch/ServiceStackWithQuartz
- www.nuget.org/packages/ServiceStack.Funq.Quartz

## Busy week at work
This week’s at work was…  an experience.  My C Drive got corrupted and I lost everything all of my software and a lot of important work files.  It took about a day to get everything installed, updated, configured and so on.  The bright side is that I’ve upgraded from Windows 8.1 to Windows 10 Enterprise, which is amazballs.  Though to get all of my work projects compiling I had to install some Windows 8 SDK compilers which was annoying.

On top of the corrupted hard-drive I had to get 2 of our projects deployed to our Devops environment for a demonstration of our API and importer tools which ended up taking quite a lot of work.  That took up all of my work hours and some more besides, so doing work on CodeReviewer.co.uk wasn’t easy.  I’m doing some research on it today and will start writing for the WebAPI 2.0 review this afternoon.  This, on top of the work with the Nuget is an acceptable amount of work for this week.



