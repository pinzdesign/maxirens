"use client";

import { useEffect } from "react";

export default function CustomerComment() {

useEffect(() => {
    if (typeof window !== "undefined") {
        const carouselElement = document.querySelector("#customerCommentCarousel");
        if (carouselElement) {
        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        new bootstrap.Carousel(carouselElement, {
            interval: 10000,
            ride: "carousel",
        });
        console.log("starting comment carousel...");
        }
    }
}, []);

  return (
    <div className="container mt-5">
      <div id="customerCommentCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="quote text-center">
                  <q>
                    Utrolig god service. Altid sød og imødekommende. Rensningen er altid i orden, og repationer er altid pæne. Maxirens får mine varmeste anbefalinger.
                  </q>
                  <p className="quoteName mt-3">Pernille H.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="quote text-center">
                  <q>
                    Fantastisk arbejde og venlig service. Jeg har aldrig haft problemer med deres tjenester og anbefaler dem til alle.
                  </q>
                  <p className="quoteName mt-3">Lars P.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="quote text-center">
                  <q>
                    Professionelt og hurtigt. Jeg er meget tilfreds med resultatet hver gang. Stor ros til teamet.
                  </q>
                  <p className="quoteName mt-3">Maria J.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#customerCommentCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#customerCommentCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}
