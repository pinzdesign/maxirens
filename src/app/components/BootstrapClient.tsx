"use client";

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function BootstrapClient() {
  useEffect(() => {
    console.log("Bootstrap JavaScript loaded");
  }, []);

  return null;
}

export default BootstrapClient;
