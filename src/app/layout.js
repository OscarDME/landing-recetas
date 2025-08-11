import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { FB_PIXEL_ID } from "./fpixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Receta del Dia",
  description: "Recetas de desayunos saludables y deliciosos",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2322c55e'/></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Meta Pixel base */}
        {FB_PIXEL_ID && (
          <>
            <Script id="fbq-init" strategy="afterInteractive">
              {`
    (function(){
      if (window.__fbPixelInitialized) return;  // <- evita dobles
      window.__fbPixelInitialized = true;

      !function(f,b,e,v,n,t,s){
        if(f.fbq) return; n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
        n.queue=[]; t=b.createElement(e); t.async=!0;
        t.src=v; s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView'); // solo aquí
    })();
  `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
