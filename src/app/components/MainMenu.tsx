import React from "react";
import Link from "next/link";

export default function SiteHeader() {
  return (
      <div className="container-fluid navmenu">
        <nav className="navbar fixed-top navbar-expand-md">
          <a className="navbar-brand" href="/">
            <h1>Maxi Rens</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href={"/"}>
                    Forside
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/profil"}>
                    Profil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/service"}>
                    Servicer
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link" scroll={true}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}