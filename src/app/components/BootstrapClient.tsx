"use client";

import { useEffect } from "react";

// Load Bootstrap JS only in the client-side
function BootstrapClient() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
        console.log("Bootstrap JavaScript loaded");
      }).catch((error) => {
        console.error("Error loading Bootstrap JS:", error);
      });
    }
  }, []);

  return null;
}

export default BootstrapClient;
