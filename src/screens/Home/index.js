import React, { useState, useEffect } from "react";

import "./home.css";

import CustomCard from "../../components/CustomCard";
import CustomCardR from "../../components/CustomCardR";
import CustomCardL from "../../components/CustomCardL";
import CustomCardI from "../../components/CustomCardI";
import CustomCardList from "../../components/CustomCardList";
// Ant Design
import { Row, Col } from "antd";

function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/equipouno.json")
      .then((res) => res.json())
      .then((data) => {
        let usersArr = [];
        for (const key in data) {
          data[key]["key"] = key;
          usersArr.push(data[key]);
        }
        console.log(usersArr);
        setPost(usersArr);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <Row className="containerCardTT">
          <Col className="containerCRT" xs={24} sm={24} md={12} lg={9}>
            <CustomCardL></CustomCardL>
          </Col>
          <Col className="containerCMT" xs={24} sm={24} md={12} lg={7}>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
            <CustomCard></CustomCard>
          </Col>
          <Col className="containerLT" xs={0} sm={0} md={0} lg={8}>
            <CustomCardR></CustomCardR>
          </Col>
        </Row>
        <p className="TextSee">SEE EDITOR’S PICKS ›</p>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <Row className="containerCIF">
          <Col xs={24} sm={24} md={24} lg={16}>
            <CustomCardI></CustomCardI>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6}>
            <p className="FechaCardItt">Popular on Medium</p>
            <hr></hr>
            <CustomCardList></CustomCardList>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default Home;
