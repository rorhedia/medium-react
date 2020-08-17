import React from "react";
import "./CustomCardL.css";

function CustomCardL({
  card: { urlimage, title, text, author, company, key },
}) {
  let urlRedirect = `/blog/${key}`;
  //window.location.pathname.split('/')[2]

  return (
    <div className="containerL">
      <a href={urlRedirect}>
        <img src={urlimage} alt={key} className="imageCL" />
      </a>
      <div className="TextccmL">
        <a href={urlRedirect}>
          <h3 className="TituloCardL">{title}</h3>
        </a>
        <a href={urlRedirect}>
          <p className="FechaCardLt">{text}</p>
        </a>
        <p className="AutorCardL">
          {author} in {company}
        </p>
        <p className="FechaCardL">06 agosto· 12:00pm ★</p>
      </div>
    </div>
  );
}

export default CustomCardL;
