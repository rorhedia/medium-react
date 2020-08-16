import React from "react";
import "./CustomCardR.scss";

class CustomCardR extends React.Component {
  render() {
    return (
      <div className="containerR">
        <div className="imageCR"></div>
        <div className="TextccmR">
          <h3 className="TituloCardR">
            {" "}
            Five Chilling Instances of Time Slips
          </h3>
          <p className="FechaCardRt">
            Society isn’t always the best measure of wh
          </p>
          <p className="AutorCardR">Tony Walker in Inside the Simulation</p>
          <p className="FechaCardR">August 03 · 4 min read ★</p>
        </div>
      </div>
    );
  }
}

export default CustomCardR;
