import React from "react";
import "./DinoInfoBox.css";

const DinoInfoBox = ({ name, discoveryYear, period, length, weight, image, reverse }) => {
  const dinoInfoBodyClass = `DinoInfoBody ${reverse ? "reverse" : ""}`;

  return (
    <article className="DinoInfoBox">
      <h2>{name}</h2>
      <section className={dinoInfoBodyClass}>
        <section>
          <p>Discovered: {discoveryYear}</p>
          <p>Period: {period}</p>
          <p>Length: {length}</p>
          <p>Weight: {weight}</p>
        </section>
        <img src={image} alt={name} />
      </section>
    </article>
  );
};

export default DinoInfoBox;
