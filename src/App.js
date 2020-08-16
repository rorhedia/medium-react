import React from "react";
import "./App.css";
import CustomCard from './components/CustomCard'
import CustomCardR from './components/CustomCardR'
import CustomCardL from './components/CustomCardL'
import CustomCardI from './components/CustomCardI'
import ImgIfini from './components/ImgIfini'
import CustomCardList from './components/CustomCardList'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="containerCardTT">
          <div class="containerCRT">
            <CustomCardL></CustomCardL>
          </div>
          <div class="containerCMT">
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
          </div>
          <div class="containerLT">
            <CustomCardR></CustomCardR>
          </div>
        </div>
        <div class="containerCIF">
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

export default App;
