import { ClientOnly, createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Rehydrate } from "@/components/cinevo/rehydrate";
import { AppNotFoundComponent } from "@/lib/not-found-component";
import appCss from "../styles.css?url";

const APP_NAME = "CINEVO";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#1A1A1E" },
      {
        name: "description",
        content: "CINEVO — Stream the movies you already own. Plex, Jellyfin, or a folder. No ads.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Poppins:wght@600;700;800&display=swap",
      },
    ],
  }),
  notFoundComponent: AppNotFoundComponent,
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-cine-bg text-cine-text antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <ClientOnly>
            <Rehydrate />
          </ClientOnly>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
