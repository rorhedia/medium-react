import React, { useState, useEffect } from "react";
import { getPosts } from "../../services.js";

import "./home.css";

// Ant Design
import { Row, Col } from "antd";

import CustomCard from "../../components/CustomCard";
import CustomCardR from "../../components/CustomCardR";
import CustomCardL from "../../components/CustomCardL";
import CustomCardI from "../../components/CustomCardI";
import CustomCardList from "../../components/CustomCardList";

function Home() {
  const [posts, setPost] = useState([]);

  window.onscroll = function (ev) {
    let diff = document.documentElement.scrollHeight - window.scrollY;
    let load = document.body.offsetHeight + 10;

    if (diff <= load) {
      getPosts().then((data) => {
        let usersArr = [];

        for (const key in data) {
          data[key]["key"] = key;
          usersArr.push(data[key]);
        }

        let newArr = posts.concat(usersArr);
        setPost(newArr);
      });
    }
  };

  useEffect(() => {
    getPosts().then((data) => {
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
          {posts.length && <CustomCardL card={posts[0]} />}
        </Col>
        <Col className="containerCMT" xs={24} sm={24} md={12} lg={7}>
          {posts.length && <CustomCard card={posts[1]} />}
          {posts.length && <CustomCard card={posts[2]} />}
          {posts.length && <CustomCard card={posts[3]} />}
        </Col>
        <Col className="containerLT" xs={0} sm={0} md={0} lg={8}>
          {posts.length && <CustomCardR card={posts[4]} />}
        </Col>
      </Row>
      <p className="TextSee">SEE EDITOR’S PICKS ›</p>
      <hr></hr>

      <Row className="containerCIF">
        {/** SCROLL INFINITO */}
        <Col xs={24} sm={24} md={24} lg={16}>
          {posts.length &&
            posts.map((post, idx) => <CustomCardI key={idx} card={post} />)}
        </Col>
        {/** POPULAR ON MEDIUM */}
        <Col className="positioS" xs={24} sm={24} md={24} lg={6}>
          <p className="PopularOnM">Popular on Medium</p>
          <hr></hr>
          {posts.length && <CustomCardList card={posts[6]} itemList="01" />}
          {posts.length && <CustomCardList card={posts[7]} itemList="02" />}
          {posts.length && <CustomCardList card={posts[8]} itemList="03" />}
          {posts.length && <CustomCardList card={posts[9]} itemList="04" />}
        </Col>
      </Row>
    </header>
  );
}

export default Home;
