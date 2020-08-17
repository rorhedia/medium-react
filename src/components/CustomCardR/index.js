import React from "react";
import "./CustomCardR.css";

function CustomCardR({
  card: { urlimage, title, text, author, company, key },
}) {
  let urlRedirect = `/blog/${key}`;
  return (
    <div className="containerR">
      <a href={urlRedirect}>
        <img src={urlimage} alt={key} className="imageCR"></img>
        </a>
      <div className="TextccmR">
        <a href={urlRedirect}>
          <h3 className="TituloCardR">
            {title}
          </h3></a>
        <a href={urlRedirect}>
          <p className="FechaCardRt">
            {text}
          </p></a>
          <p className="AutorCardR">{author} in {company}</p>
          <p className="FechaCardR">August 03 · 4 min read ★</p>
        </div>
      </div>
    );
  }

export default CustomCardR;
