<template>
  <div v-show="theme !== undefined" class="min-h-screen flex flex-col">
    <Nav :is-light-theme="theme === 'light'" @toggle-theme="onToggleTheme" />
    <main
      class="flex-1 pt-16 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const theme = ref<"light" | "dark" | undefined>(undefined);

const toggleThemeClasses = (themeToChangeto: "light" | "dark") => {
  document.documentElement.classList.remove("dark");
  if (themeToChangeto === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }

  theme.value = themeToChangeto;
};

onMounted(() => {
  const preferredTheme = window.localStorage.getItem("theme-preference");
  if (preferredTheme) {
    switch (preferredTheme) {
      case "light":
        toggleThemeClasses("light");
        break;
      case "dark":
        toggleThemeClasses("dark");
        break;
      case "auto":
        setupAutoTheme();
        break;
    }
  } else {
    setupAutoTheme();
  }
});
const setupAutoTheme = () => {
  const hasThemeSupport = window.matchMedia;

  if (
    hasThemeSupport &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    toggleThemeClasses("dark");
  } else {
    toggleThemeClasses("light");
  }

  if (hasThemeSupport) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const isDarkTheme = e.matches;
        const newtheme = isDarkTheme ? "dark" : "light";
        toggleThemeClasses(newtheme);
        theme.value = newtheme;
      });
  }

  window.localStorage.setItem("theme-preference", "auto");
};

const onToggleTheme = () => {
  if (theme.value === "dark") {
    toggleThemeClasses("light");
    window.localStorage.setItem("theme-preference", "light");
  } else {
    toggleThemeClasses("dark");
    window.localStorage.setItem("theme-preference", "dark");
  }
};
</script>
