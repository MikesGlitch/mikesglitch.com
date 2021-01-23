---
layout: post
title:  "Updating Configuration Files"
date:   2016-03-12 17:58:09 +0100
categories: old-blog
---
When working in a team of developers in a Source Controlled environment it is very common to see Smudge and Clean filters in use.  They are used to blank out values in .config files in order to make sure that one persons setting do not interfere with another persons.  For example, take the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <connectionStrings>
    <add name="DefaultConnection" connectionString=" " providerName="System.Data.SqlClient" />
  </connectionStrings>
  <appSettings>
      <add key="CommandsQueue" value=" "/>
  </appSettings>
</configuration>
```

The app setting "CommandsQueue" is an Amazon SQS queue that holds Command messages for a single tenant sent from the Web UI to the Command Receiver.  The Commands Queue MUST be separated by tenant to ensure scalability and so is different for every developer and cannot/should not be pushed up to GitHub as a common setting.

With the above in mind, it becomes clear that for some configuration properties we cannot simple share the same values for every developer/tenant.  Therefore, we must correctly employ a Smudge and Clean filter, and find a way to populate the configuration files.  But what are the options?

## Scripting
The most common way to update configuration files is via custom Powershell scripts.  Your custom script will effectively take your Configuration file, retrieve the app setting that you are trying to populate, and set it with a value hardcoded in the script.  Because the value is hardcoded in the script it often means that your script cannot be on a public repository for security reasons.

It is also worth mentioning that an alternative to storing all configuration settings in a configuration file is to use a Database store.  The advantages to using databases to store configurations largely stem from the ability to change configurations on the fly whenever you want without having to worry about redeploying your solution.

The concept of storing configuration data in databases is expanded on in more detail on this post.
