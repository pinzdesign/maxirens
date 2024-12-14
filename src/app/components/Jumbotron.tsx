"use client";

import { useEffect } from "react";

export default function Jumbotron() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const carouselElement = document.querySelector("#jumbotronCarousel");
      if (carouselElement) {
        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        new bootstrap.Carousel(carouselElement, {
          interval: 10000,
          ride: "carousel",
        });
        console.log("starting jumbo carousel...");
      }
    }
  }, []);

  return (
    <div id="jumbotronCarousel" className="jumbotron carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner.png")'}}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner2.webp")'}}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner3.png")'}}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
