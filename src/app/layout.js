
"use client";

import Script from "next/script";

/* ✅ Global styles */
import "~/public/main-assets/css/fonts.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Tailwind CDN — Next.js safe */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
