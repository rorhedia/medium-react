import React from "react";
import { Link } from "react-router-dom";
import { Popover, Tooltip } from "antd";
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
        <Popover
          placement="topLeft"
          content={author}
          title={company}
          trigger="hover"
        >
        <p className="AutorCardL">
          {author} in {company}
        </p></Popover>
        <Tooltip placement="topLeft" title="Updated 30 Jun">
          <p className="FechaCardL">30 June· 12:00pm ★</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default CustomCardL;
