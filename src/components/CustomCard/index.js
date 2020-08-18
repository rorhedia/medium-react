import React from "react";
import { Link } from "react-router-dom";

import "./CustomCard.css";

function CustomCard({ card: { urlimage, title, author, key } }) {
  let urlRedirect = `/blog/${key}`;

  return (
    <div className="container">
      <Link to={urlRedirect}>
        <img src={urlimage} alt={key} className="imageC" />
      </Link>
      <div className="Textccm">
        <Link to={urlRedirect}>
          <h3 className="TituloCard"> {title}</h3>
        </Link>
        <p className="AutorCard">{author}</p>
        <p className="FechaCard">August 03 · 4 min read ★</p>
      </div>
    </div>
  );
}

export default CustomCard;
