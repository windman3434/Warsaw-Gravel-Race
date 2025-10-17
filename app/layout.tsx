import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const sawtonIndustrial = localFont({
  src: [
    {
      path: "../fonts/sawtonindustrial-thin-webfont.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/sawtonindustrial-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/sawtonindustrial-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sawtonindustrial-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sawtonindustrial-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sawton",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Warsaw Gravel Series",
  description: "Where city people meet gravel - The series of 4 marvellous gravel races just next to Warsaw",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sawtonIndustrial.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = { title: "Your site", description: "..." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* MailerLite Universal */}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1359190');
          `}
        </Script>
        {/* End MailerLite Universal */}
      </body>
    </html>
  );
}
