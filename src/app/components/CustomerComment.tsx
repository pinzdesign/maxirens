"use client";

import { Carousel } from 'react-bootstrap'; // Direct import instead of dynamic import

export default function CustomerComment() {
  return (
    <div className="container mt-5">
      <Carousel interval={10000} controls>
        <Carousel.Item>
          <div className="quote text-center">
            <q>
              Utrolig god service. Altid sød og imødekommende. Rensningen er altid i orden, og repationer er altid pæne. Maxirens får mine varmeste anbefalinger.
            </q>
            <p className="quoteName mt-3">Pernille H.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="quote text-center">
            <q>
              Fantastisk arbejde og venlig service. Jeg har aldrig haft problemer med deres tjenester og anbefaler dem til alle.
            </q>
            <p className="quoteName mt-3">Lars P.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="quote text-center">
            <q>
              Professionelt og hurtigt. Jeg er meget tilfreds med resultatet hver gang. Stor ros til teamet.
            </q>
            <p className="quoteName mt-3">Maria J.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
