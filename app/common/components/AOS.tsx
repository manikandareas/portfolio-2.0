"use client";
import React from "react";

export default function AOS() {
  React.useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        delay: 50,
      });
    });
  }, []);
  return null;
}
