import React from "react";
import { Link } from "react-router-dom";

import "./CustomCardR.css";

function CustomCardR({
  card: { urlimage, title, text, author, company, key },
}) {
  let urlRedirect = `/blog/${key}`;
  return (
    <div className="containerR">
      <Link to={urlRedirect}>
        <img src={urlimage} alt={key} className="imageCR"></img>
      </Link>
      <div className="TextccmR">
        <Link to={urlRedirect}>
          <h3 className="TituloCardR">{title}</h3>
        </Link>
        <Link to={urlRedirect}>
          <p className="FechaCardRt">{text.slice(0, 50)}</p>
        </Link>
        <p className="AutorCardR">
          {author} in {company}
        </p>
        <p className="FechaCardR">August 03 · 4 min read ★</p>
      </div>
    </div>
  );
}

export default CustomCardR;
