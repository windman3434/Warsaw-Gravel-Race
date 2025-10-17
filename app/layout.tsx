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
