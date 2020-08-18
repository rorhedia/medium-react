import React from "react";
import { Link } from "react-router-dom";
import { Popover, Tooltip } from "antd";
import "./CustomCard.css";

function CustomCard({ card: { urlimage, title, author, key, company } }) {
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
        <Popover
          placement="topLeft"
          content={author}
          title={company}
          trigger="hover"
        >
          <p className="AutorCard">{author}</p>
        </Popover>
        <Tooltip placement="topLeft" title="Updated 10 Jul">
          <p className="FechaCard">July 10 · 4 min read ★</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default CustomCard;
