import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { HTMLRewriter } from "https://deno.land/x/html_rewriter@v0.1.0-pre.17/index.ts";
import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

// Your Google Analytics Tracking ID
const GA_TRACKING_ID = "G-JYHDDF6CTH"; // Replace with your Google Analytics tracking ID

// Middleware to inject Google Analytics script
function injectGoogleAnalytics(req: Request, next: () => Promise<Response>): Promise<Response> {
  return next().then((res) => {
    if (res.headers.get("content-type")?.includes("text/html")) {
      // Inject GA script using HTMLRewriter
      const rewriter = new HTMLRewriter()
        .on("head", {
          element(el) {
            el.append(`
              <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              </script>`, { html: true });
          },
        });
      return rewriter.transform(res);
    }
    return res;
  });
}

// Serve the blog with the GA middleware
blog({
  title: "ElliNet13's Blog",
  author: "ElliNet13",
  links: [{ title: "Links", url: "https://bit.ly/m/ellinet13" }],
  background: "#fff",
  middleware: [injectGoogleAnalytics],  // Inject the GA middleware
});

// Start the server
serve((req) => blog(req));
