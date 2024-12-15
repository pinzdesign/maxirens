"use client";

import { useEffect } from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap

export default function Jumbotron() {
  useEffect(() => {
    // Ensure we are running this code only on the client-side
    if (typeof window !== "undefined" && window.bootstrap) {
      const carouselElement = document.querySelector("#jumbotronCarousel");
      if (carouselElement) {
        // Initialize the Bootstrap carousel using the native Bootstrap JS
        const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement);
        bootstrapCarousel.cycle(); // Start the carousel automatically
      }
    }
  }, []);

  return (
    <div
      id="jumbotronCarousel"
      className="jumbotron carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <Carousel interval={10000} controls>
        <Carousel.Item>
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner1.webp")' }}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner2.webp")' }}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jumbotron-slide" style={{ backgroundImage: 'url("/images/banner3.webp")' }}>
            <h2 className="lead">Vi tilbyder professionel rens, vask og reparation af tøj.</h2>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
