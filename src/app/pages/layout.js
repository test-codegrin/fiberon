import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";

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


export default function PagesRootLayout({ children }) {
  return children
}

