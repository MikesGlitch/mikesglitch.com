---
layout: post
title:  "Thinking of the future"
date:   2016-05-30
tags: old blog
description:  "Thinking of what I should do in the future"
timeToRead: 5 minutes
---
This week I’ve been working through my second draft of the ServiceStack article.  So far I think the article is looking quite good, at least in comparison to what it was last week.  I’ve also added a Table of Contents that follows you down the page in the sidebar which is a really useful thing because the articles are quite large.  I’ve added a lot more into the benchmarks section of the article, cleaned up the structure, and rewritten some of it to make it more readable.  I need to continue on, and I think it will take a fourth draft before I’m happy enough with it to move on to Nancy properly.  On top of all that, I’m thinking about creating a markup review sheet for API Frameworks that can be consistent across API reviews.  This will allow an easy way to compare the frameworks and could offer insight to someone looking to pick a framework.

## Idea for a side project
At my current work I’m building what we call an “Integration Service” which is a program that allows us do the following:

- Set up a Trigger (Time Schedule, Event Trigger, S3 Drop etc)
- Set up a Process (API query, Data import, Data transform etc)
- Set up an Output (Email, SFTP, S3 etc)

From what I understand this is a fairly common things for people to implement, primarily used for things like data analytics where the product needs to be able to extract data on a consistent bases, transform it to CSV and send it to clients for their in-house analytics/stakeholders.  The idea for the side-project would be to make a framework that allows developers to write certain Triggers, Processes, and Outputs and allow the framework to do the rest of the work in terms of executing it all.  This would mean the user wouldn’t have to worry about installing a time scheduler like Quartz.Net or doing any of the implementation in terms of making it message-based and so on, all they would have to worry about is writing their own custom Triggers, Processes and Outputs – some of these could even be written for you with minimal configuration needed.  The best thing about this is I’m already doing something like this at work, so I’m fairly confident I know what I want to build.  I’m not going to put anything on the calendar just yet, but I’m interested in this project and think I might make something similar to what I’ve got at work, but different.

## Viewership
In terms of viewership, CodeReviewer.co.uk has had 11 visitors, but I’m not sure how many of those are me.  I know that some of them aren’t me because they’re from different PC’s (Macintosh/IOS/ the screen resolution is way too different to be me), but it’s still not too many people.  I can’t complain of course, because I only have 1 article. With this website, MichaelClark.tech , I’ve had 12 visitors and 45 page views, which is alright, but not great either – but of course I don’t expect this website to be more successful than CodeReviewer because it’s way to personal to be something someone would search for.

I’m still not going to try to expand viewership yet – I’m going to wait until I have some more articles that are better revised.  Having said that, I need to continue thinking about how CodeReviewer can be progressed.  I think that as soon as I can get 6 articles done I need to think about marketing, which means writing articles on other more popular Blogs and thinking about SEO – which I haven’t bothered with as of now.

