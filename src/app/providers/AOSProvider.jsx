"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });

    // Important for App Router hydration
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return children;
}
