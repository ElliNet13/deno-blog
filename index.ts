import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

// Google Analytics Tracking ID
const GA_TRACKING_ID = "G-JYHDDF6CTH";

// Start the blog with Google Analytics injected via custom_head
blog({
  title: "ElliNet13's Blog",
  author: "ElliNet13",
  links: [
    { title: "Links", url: "https://bit.ly/m/ellinet13" },
  ],
  background: "#fff",
  custom_head: `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    </script>
  `,
});
