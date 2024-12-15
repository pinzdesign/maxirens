"use client";

import { Carousel } from 'react-bootstrap';

export default function Jumbotron() {
  return (
    <div id="jumbotronCarousel" className="jumbotron carousel slide carousel-fade">
      <Carousel interval={10000} fade controls={false} indicators={false}>
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
