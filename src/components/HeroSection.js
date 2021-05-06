import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" dataAos="fade-in">
        <h1>Rahul Hirve</h1>
        <p>
          I'm
          <span
            className="typed"
            dataTypedItems="Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  );
}
