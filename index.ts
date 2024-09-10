import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { HTMLRewriter } from "https://deno.land/x/html_rewriter@v0.1.0-pre.17/index.ts";
import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

// Google Analytics Tracking ID
const GA_TRACKING_ID = "G-JYHDDF6CTH";

// Middleware to inject Google Analytics script
function injectGoogleAnalytics(res: Response): Response {
  if (res.headers.get("content-type")?.includes("text/html")) {
    // Use HTMLRewriter to inject the Google Analytics script into <head>
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
        }
      });

    // Transform and return the modified response
    return rewriter.transform(res);
  }
  return res;
}

// Set up the blog instance
const handler = blog({
  title: "ElliNet13's Blog",
  author: "ElliNet13",
  links: [{ title: "Links", url: "https://bit.ly/m/ellinet13" }],
  background: "#fff",
});

// Manual server setup
serve(async (req: Request) => {
  // Get the response from the blog handler
  const res = await handler(req);

  // Inject Google Analytics script if the response is HTML
  return injectGoogleAnalytics(res);
});
