import React from "react";
import { Link } from "react-router-dom";
import { Popover, Tooltip } from "antd";

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
        <Popover
          placement="topLeft"
          content={author}
          title={company}
          trigger="hover"
        >
          <p className="AutorCardR">
            {author} in {company}
          </p>
        </Popover>
        <Tooltip placement="topLeft" title="Updated 28 May">
          <p className="FechaCardR">May 28 · 4 min read ★</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default CustomCardR;
