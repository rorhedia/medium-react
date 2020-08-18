import React from "react";
import { Link } from "react-router-dom";
import "./CustomCardI.css";
import { Popover, Tooltip } from "antd";

function CustomCardI({
  card: { urlimage, title, text, author, company, key },
}) {
  let urlRedirect = `/blog/${key}`;

  return (
    <div className="containeri">
      <div className="Textccmi">
        <p className="TextCardItt">POPULAR ON MEDIUM</p>
        <Link to={urlRedirect}>
          <h3 className="TituloCardi">{title.slice(0, 40)}</h3>
        </Link>
        <Link to={urlRedirect}>
          <p className="FechaCardIt">{text.slice(0, 43)}</p>
        </Link>
        <Popover
          placement="topLeft"
           content={author}
          title={company}
          trigger="hover"
        >
          <p className="AutorCardi">
            {author} in {company}
          </p>
        </Popover>
        <Tooltip placement="topLeft" title="Updated 07 Dec">
          <p className="FechaCardi">December 07 · 4 min read ★</p>
        </Tooltip>
      </div>
      <Link to={urlRedirect}>
        <img src={urlimage} alt={key} className="imageCi" />
      </Link>
    </div>
  );
}

export default CustomCardI;
