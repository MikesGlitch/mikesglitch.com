<template>
  <footer class="bg-white dark:bg-gray-medium-2 font-bold text-black dark:text-white py-12 px-1">
    <div class="container">
      <div class="flex gap-6 w-full h-full items-center justify-center">
        <NavExternalLink title="Contact me" href="mailto:mclarkgb@gmail.com?subject=Hi%20Mike!" text="Contact me">
          <template #icon>
            <IconMail class="h-4 w-4 text-black dark:text-white" />
          </template>
        </NavExternalLink>
        <NavExternalLink title="Check out my GitHub" href="https://github.com/mikesglitch" text="GitHub">
          <template #icon>
            <IconGithub class="h-4 w-4 text-black dark:text-white" />
          </template>
        </NavExternalLink>
        <NavExternalLink title="Check out my LinkedIn" href="https://www.linkedin.com/in/mikesglitch" text="LinkedIn">
          <template #icon>
            <IconLinkedin class="fill-[#0e76a8] dark:fill-white h-4 w-4" />
          </template>
        </NavExternalLink>
      </div>
      <div class="mt-4 text-center text-sm">
        Copyright © 2021 – present. All rights reserved.
      </div>
    </div>
  </footer>
</template>
