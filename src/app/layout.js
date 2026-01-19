/* ✅ Global styles */
import "~/public/main-assets/css/fonts.css";
import "./globals.css";
import Script from "next/script";

/* ✅ Site Metadata */
export const metadata = {
  title: {
    default: "FIBERON",
    template: "FIBERON",
  },
  description: "Your website short description goes here",
  icons: {
    icon: "/main-assets/img/hero/Fibron_Logo_Black_New.png",        // 32x32
    shortcut: "/main-assets/img/hero/Fibron_Logo_Black_New.png",    // fallback
    apple: "/main-assets/img/hero/Fibron_Logo_Black_New.png",
  },
  openGraph: {
    title: "FIBERON",
    description: "Your website short description goes here",
    images: [
      {
        url: "/main-assets/img/hero/Fibron_Logo_Black_New.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "FIBERON",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
