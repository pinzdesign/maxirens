"use client";

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function BootstrapClient() {
  useEffect(() => {
    // Ensure this code runs only on the client-side
    if (typeof window !== "undefined") {
      console.log("Bootstrap JavaScript loaded");
    }
  }, []);

  return null;
}

export default BootstrapClient;
