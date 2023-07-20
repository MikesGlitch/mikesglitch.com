export default defineNuxtPlugin(() => {
  // Clarity analytics https://clarity.microsoft.com
  const config = useRuntimeConfig()
  if (config.public.useClarityAnalytics) {
    useHead({
      script: [{
        innerHTML: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "i2gawn8z0j");`
      }]
    })
  }
})
