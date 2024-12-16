"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div id="jumbotronCarousel" className="jumbotron carousel slide carousel-fade" data-bs-ride="carousel">
      <Carousel interval={10000} controls fade>
        <Carousel.Item>
          <div className="jumbotron-slide">
            <Image
              src="/images/banner1.webp"
              alt="Banner 1"
              layout="responsive"
              width={1200} 
              height={600} 
              priority
            />
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jumbotron-slide">
            <Image
              src="/images/banner2.webp"
              alt="Banner 2"
              layout="responsive"
              width={1200}
              height={600}
            />
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="jumbotron-slide">
            <Image
              src="/images/banner3.webp"
              alt="Banner 3"
              layout="responsive"
              width={1200}
              height={600}
            />
            <h2 className="lead">
              Vi tilbyder professionel rens, vask og reparation af tøj.
            </h2>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
