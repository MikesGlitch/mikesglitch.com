---
layout: post
title:  "Git Smudge and Clean Filters"
date:   2016-02-12 17:58:09 +0100
categories: misc
---
The **Smudge** is the equivalent to “Run this code whenever you check anything out”.

The **Clean** is the equivalent to “Run this code whenever you check anything in”.

The Smudge and Clean are most commonly used for things like credentials (in connection strings or keys for AWS etc).

## The Usage in Git
Git provides filters which you can access via your attributes and config files.

Filters are arbitrary Unix software.  They must conform to the standard interface for all Unix software:  take input via stdin write output to stdout , exit with a 0 for success or any number up to 255 for failure, etc.  Unfortunately, git seems to suppress filter output whether it happens on stdout or stderr .

However, “Arbitrary Unix software” means you can implement these filters in a huge range of ways.  you could easily use Node.js, Ruby and Perl.