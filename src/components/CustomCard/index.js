import React from "react";
import "./CustomCard.css";

function CustomCard({
  card: { urlimage, title, author, key },
}) {
let urlRedirect = `/blog/${key}`;
    return (
      <div className="container">
        <a href={urlRedirect}>
          <img src={urlimage} alt={key} className="imageC" />
        </a>
        <div className="Textccm">
          <a href={urlRedirect}>
            <h3 className="TituloCard"> {title}</h3>
          </a>
          <p className="AutorCard">{author}</p>
          <p className="FechaCard">August 03 · 4 min read ★</p>
        </div>
      </div>
    );
}

export default CustomCard;
