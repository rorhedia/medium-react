import React from "react";
import "./CustomCardL.css";

function CustomCardL(props) {
  console.log("icbefubv", props, props.card);
  const { urlimage, title, text, author, company, key } = props;
  return (
    <div className="containerL">
      <img src={urlimage} className="imageCL" />
      <div className="TextccmL">
        <h3 className="TituloCardL">{title}</h3>
        <p className="FechaCardLt">{text}</p>
        <p className="AutorCardL">
          {author} in {company}
        </p>
        <p className="FechaCardL">06 agosto· 12:00pm ★</p>
      </div>
    </div>
  );
}

export default CustomCardL;
