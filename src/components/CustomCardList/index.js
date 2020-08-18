import React from "react";
import { Link } from "react-router-dom";
import { Popover, Tooltip } from "antd";
import "./CustomCardList.css";

function CustomCardList({
  card: { urlimage, title, text, author, company, key },
  itemList,
}) {
  let urlRedirect = `/blog/${key}`;

  return (
    <div className="containerList">
      <p className="NumList">{itemList}</p>
      <div className="TextccmList">
        <Link to={urlRedirect}>
          <h3 className="TituloCardList">{title.slice(0, 40)}</h3>
        </Link>
        <Popover
          placement="topLeft"
          content={author}
          title={company}
          trigger="hover"
        >
          <p className="AutorCardList">
            {author} in {company}
          </p>
        </Popover>
        <Tooltip placement="topLeft" title="Updated 23 Sep">
          <p className="FechaCardList">September 23 · 4 min read ★</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default CustomCardList;
