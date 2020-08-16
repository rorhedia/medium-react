import React from "react";
import "./CustomCardList.css";

class CustomCardList extends React.Component {
  render() {
    return (
      <div className="containerList">
        <p className="Num">01</p>
        <div className="TextccmList">
          <h3 className="TituloCardList">
            Five Chilling Instances of Time Slips
          </h3>
          <p className="AutorCardList">Tony Walker in Inside the Simulation</p>
          <p className="FechaCardList">August 03 · 4 min read ★</p>
        </div>
      </div>
    );
  }
}

export default CustomCardList;
