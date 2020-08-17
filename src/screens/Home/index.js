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
    fetch("https://reactsessions-ac545.firebaseio.com/equipotres.json")
      .then((res) => res.json())
      .then((data) => {
        let usersArr = [];
        for (const key in data) {
          data[key]["key"] = key;
          usersArr.push(data[key]);
        }
        setPost(usersArr);
      });
  }, []);
  return (
    <header className="App-header">
      {console.log(posts, posts[1])}
      <br></br>
      <Row className="containerCardTT">
        <Col className="containerCRT" xs={24} sm={24} md={12} lg={9}>
          {posts ? <CustomCardL card={posts[0]} /> : null}
        </Col>
        <Col className="containerCMT" xs={24} sm={24} md={12} lg={7}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </Col>
        <Col className="containerLT" xs={0} sm={0} md={0} lg={8}>
          <CustomCardR />
        </Col>
      </Row>
      <p className="TextSee">SEE EDITOR’S PICKS ›</p>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <Row className="containerCIF">
        <Col xs={24} sm={24} md={24} lg={16}>
          <CustomCardI />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <p className="FechaCardItt">Popular on Medium</p>
          <hr></hr>
          <CustomCardList />
        </Col>
      </Row>
    </header>
  );
}

export default Home;
