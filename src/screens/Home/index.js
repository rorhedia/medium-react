import React from "react";
import "./home.css";

import CustomCard from "../../components/CustomCard";
import CustomCardR from "../../components/CustomCardR";
import CustomCardL from "../../components/CustomCardL";
import CustomCardI from "../../components/CustomCardI";
import CustomCardList from "../../components/CustomCardList";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="containerCardTT">
          <div className="containerCRT">
            <CustomCardL></CustomCardL>
          </div>
          <div className="containerCMT">
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
          </div>
          <div className="containerLT">
            <CustomCardR></CustomCardR>
          </div>
        </div>
        <div className="containerCIF">
          <CustomCardI></CustomCardI>
          <CustomCardList></CustomCardList>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
