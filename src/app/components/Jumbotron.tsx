"use client";

import { useEffect, useState } from "react"; 
import { Carousel } from "react-bootstrap";

export default function Jumbotron() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient && window.bootstrap) {
      const carouselElement = document.querySelector("#jumbotronCarousel");
      if (carouselElement) {
        const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement);
        bootstrapCarousel.cycle(); 
      }
    }
  }, [isClient]);

  if (!isClient) {
    return null; 
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
