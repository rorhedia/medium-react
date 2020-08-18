import React from "react";
import "./CustomCardI.css";
import { Popover, Button } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


function CustomCardI({
  card: { urlimage, title, text, author, company, key },
}){
  let urlRedirect = `/blog/${key}`;
    return (
      <div className="containeri">
        <div className="Textccmi">
          <p className="TextCardItt">POPULAR ON MEDIUM</p>
          <a href={urlRedirect}>
            <h3 className="TituloCardi">{title}</h3>
          </a>
          <a href={urlRedirect}>
            <p className="FechaCardIt">{text}</p>
          </a>
          ReactDOM.render(
          <Popover content={content} title="Title" trigger="hover">
            <p className="AutorCardi">
              {author} in {company}
            </p>
          </Popover> mountNode, );
          <p className="FechaCardi">August 03 · 4 min read ★</p>
        </div>
        <a href={urlRedirect}>
          <img src={urlimage} alt={key} className="imageCi" />
        </a>
      </div>
    );
  }


export default CustomCardI;
