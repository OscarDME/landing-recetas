import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Receta del Dia",
  description: "Recetas de desayunos saludables y deliciosos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script id="fbq-init" strategy="afterInteractive">
          {`
            (function () {
              if (window.__fbPixelInitialized) return;
              window.__fbPixelInitialized = true;

              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1394486948289979'); // EL ÚNICO ID

              // Parche anti-duplicado: bloquea segundos PageView
              const _fbq = fbq;
              window.fbq = function(){
                if (arguments && arguments[0] === 'track' && arguments[1] === 'PageView') {
                  if (window.__pvFired) return; // ignora repetidos
                  window.__pvFired = true;
                }
                return _fbq.apply(this, arguments);
              };
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
