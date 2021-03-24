---
layout: post
title:  "Finally making some progress"
date:   2016-05-13
tags: old blog
timeToRead: 5 minutes
---
Over the last week the progress has been good.  I’ve managed to complete the first draft of the ServiceStack article and I’ve learned a lot.  At work, we’ve also bought ServiceStack Enterprise Licenses for our APIs so it feels good be writing this article and supporting ServiceStack because it really is a great framework.  The first draft is still rough, but contains a lot of good information and is available here :

[http://codereviewer.co.uk/2016/02/23/servicestack/#Performance](http://codereviewer.co.uk/2016/02/23/servicestack/#Performance)

I’ll be looking to clean up the draft and add some more relevant information over the next month and possibly beyond with any framework updates.  On top of this, I had the great idea (If I say so myself) to build my own benchmark tests because I noticed some of the benchmarks which compared WebAPI alongside ServiceStack had some dodgy code in them.  I found that not only were different clients being used to send the requests, but the WebApi client was actually calling the Result of a task twice per call – which slowed it down a bit.  I fixed the issue with the result call and it turns out that WebApi is still slower, but nowhere near as slow as was stated.  I’m still working on the repository and am considering changing the Clients used to test each framework to a single Client, but I’m in two minds because they each use the suggested Client for the framework.  Whatever I chose the repository is available here :

[www.github.com/mikesglitch/WebServiceBenchmarks](www.github.com/mikesglitch/WebServiceBenchmarks)

I’ll be adding all frameworks that I will be testing into this repository which will allow for some nice comparisons in one single place.  Currently I’ve added ServiceStack, Web API and NancyFx for end-to-end benchmarks.

## Moving on to NancyFx
I’ve spent a little bit of time this week looking at NancyFx and so far I’m really liking what I see.  It’s a very light-weight framework with very few dependencies and looks to perform a lot better than ServiceStack does.  Of course, it comes at a cost and doesn’t offer the same features that ServiceStack does but if you wouldn’t be using them anyway I can see Nancy being very viable. It’s also completely free, unlike ServiceStack which offers a lot to Indie developers like myself.

What’s great is that I have a lot to say about this framework in comparison to ServiceStack already and I’ve only spent a couple of hours looking at it.  This tells me firstly that these two frameworks are far enough apart to make it worthwhile and interesting to write about them.  Secondly it tells me how far I’ve come in my understanding of these API frameworks in general because a couple of weeks ago I wouldn’t have been able to point out what was good/bad about any of them.  The learning experience of writing these articles is really immense and it makes the time spent researching really exciting and valuable to me.

The next thing, after I have a few frameworks articles written, is to get people interested in reading them.  I’m starting to think about how I should market the site and about the future of Code Reviewer.

