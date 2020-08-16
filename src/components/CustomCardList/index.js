import React from "react";
import "./CustomCardList.scss";

class CustomCardList extends React.Component {
  render() {
    return (
      <div className="containerList">
        <img
          alt=""
          className="imageCList"
          src="data:image/jpeg;base64,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"
        ></img>
        <div class="TextccmList">
          <h3 className="TituloCardList"> Five Chilling Instances of Time Slips</h3>
          <p className="AutorCardList">Tony Walker in Inside the Simulation</p>
          <p className="FechaCardList">August 03 · 4 min read ★</p>
        </div>
      </div>
    );
  }
}

export default CustomCardList;
