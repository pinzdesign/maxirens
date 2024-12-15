"use client";

import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function CustomerComment() {
  // State to check if we're on the client-side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run this effect on the client-side
    if (typeof window !== "undefined") {
      setIsClient(true); // Set state to true to render the component
    }
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR to avoid 'document is not defined'
  }

  return (
    <div className="container mt-5">
      <div className="carousel slide" data-bs-ride="carousel">
        <Carousel interval={10000} controls>
          <Carousel.Item>
            <div className="quote text-center">
              <q>
                Utrolig god service. Altid sød og imødekommende. Rensningen er
                altid i orden, og repationer er altid pæne. Maxirens får mine
                varmeste anbefalinger.
              </q>
              <p className="quoteName mt-3">Pernille H.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="quote text-center">
              <q>
                Fantastisk arbejde og venlig service. Jeg har aldrig haft
                problemer med deres tjenester og anbefaler dem til alle.
              </q>
              <p className="quoteName mt-3">Lars P.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="quote text-center">
              <q>
                Professionelt og hurtigt. Jeg er meget tilfreds med resultatet
                hver gang. Stor ros til teamet.
              </q>
              <p className="quoteName mt-3">Maria J.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
