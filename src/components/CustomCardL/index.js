import React from "react";
import { Link } from "react-router-dom";
import "./CustomCardL.css";

function CustomCardL({
  card: { urlimage, title, text, author, company, key },
}) {
  let urlRedirect = `/blog/${key}`;

  return (
    <div className="containerL">
      <Link to={urlRedirect}>
        <img src={urlimage} alt={key} className="imageCL" />
      </Link>
      <div className="TextccmL">
        <Link to={urlRedirect}>
          <h3 className="TituloCardL">{title}</h3>
        </Link>
        <Link to={urlRedirect}>
          <p className="FechaCardLt">{text}</p>
        </Link>
        <p className="AutorCardL">
          {author} in {company}
        </p>
        <p className="FechaCardL">06 agosto· 12:00pm ★</p>
      </div>
    </div>
  );
}

export default CustomCardL;
