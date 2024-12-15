"use client";

import { useEffect, useState } from "react"; // Import useState and useEffect
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap

export default function Jumbotron() {
  // State to check if we're on the client-side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we are running this code only on the client-side
    if (typeof window !== "undefined") {
      setIsClient(true); // Set to true after component is mounted on the client
    }
  }, []);

  useEffect(() => {
    // Only run this on the client-side after mounting
    if (isClient && window.bootstrap) {
      const carouselElement = document.querySelector("#jumbotronCarousel");
      if (carouselElement) {
        // Initialize the Bootstrap carousel using the native Bootstrap JS
        const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement);
        bootstrapCarousel.cycle(); // Start the carousel automatically
      }
    }
  }, [isClient]); // This effect depends on the client-side state

  if (!isClient) {
    return null; // Return nothing during SSR to avoid 'document is not defined'
  }

  return (
    <div
      id="jumbotronCarousel"
      className="jumbotron carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <Carousel interval={10000} controls>
        <Carousel.Item>
          <div
            className="jumbotron-slide"
            style={{ backgroundImage: 'url("/images/banner1.webp")' }}
          >
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="jumbotron-slide"
            style={{ backgroundImage: 'url("/images/banner2.webp")' }}
          >
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="jumbotron-slide"
            style={{ backgroundImage: 'url("/images/banner3.webp")' }}
          >
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
