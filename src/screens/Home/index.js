import React, { useState, useEffect } from "react";

import "./home.css";

// Ant Design
import { Row, Col } from "antd";

import CustomCard from "../../components/CustomCard";
import CustomCardR from "../../components/CustomCardR";
import CustomCardL from "../../components/CustomCardL";
import CustomCardI from "../../components/CustomCardI";
import CustomCardList from "../../components/CustomCardList";
import responsiveObserve from "antd/lib/_util/responsiveObserve";

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
        usersArr.reverse();
        setPost(usersArr);
      });
  }, []);

  return (
    <header className="App-header">
      <br></br>
      <Row className="containerCardTT">
        <Col className="containerCRT" xs={24} sm={24} md={12} lg={9}>
          {posts.length ? <CustomCardL card={posts[0]} /> : null}
        </Col>
        <Col className="containerCMT" xs={24} sm={24} md={12} lg={7}>
          {posts.length ? <CustomCard card={posts[1]} /> : null}
          {posts.length ? <CustomCard card={posts[2]} /> : null}
          {posts.length ? <CustomCard card={posts[3]} /> : null}
        </Col>
        <Col className="containerLT" xs={0} sm={0} md={0} lg={8}>
          {posts.length ? <CustomCardR card={posts[4]} /> : null}
        </Col>
      </Row>
      <p className="TextSee">SEE EDITOR’S PICKS ›</p>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <Row className="containerCIF">
        <Col xs={24} sm={24} md={24} lg={16}>
          {posts.length ? <CustomCardI card={posts[5]} /> : null}
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <p className="FechaCardItt">Popular on Medium</p>
          <hr></hr>
          {posts.length ? <CustomCardList card={posts[6]} /> : null}
        </Col>
      </Row>
    </header>
  );
}

export default Home;
