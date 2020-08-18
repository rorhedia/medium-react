import React from "react";
import { Link } from "react-router-dom";

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
          <h3 className="TituloCardList">{title}</h3>
        </Link>
        <p className="AutorCardList">
          {author} in {company}
        </p>
        <p className="FechaCardList">August 03 · 4 min read ★</p>
      </div>
    </div>
  );
}

export default CustomCardList;
