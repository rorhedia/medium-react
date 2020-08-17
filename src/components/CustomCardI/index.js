import React from "react";
import "./CustomCardI.css";

function CustomCardI({
  card: { urlimage, title, text, author, company, key },
}){
  let urlRedirect = `/blog/${key}`;
    return (
      <div className="containeri">
        <div className="Textccmi">
        <p className="TextCardItt">POPULAR ON MEDIUM</p>
        <a href={urlRedirect}>
          <h3 className="TituloCardi">{title}</h3></a>
        <a href={urlRedirect}>
          <p className="FechaCardIt">{text}
          </p></a>
        <a href={urlRedirect}>
          <p className="AutorCardi">{author} in {company}</p></a>
          <p className="FechaCardi">August 03 · 4 min read ★</p>
      </div>
        <a href={urlRedirect}>
        <img
          src={urlimage} alt={key}
          className="imageCi"/></a>
      </div>
    );
  }


export default CustomCardI;
