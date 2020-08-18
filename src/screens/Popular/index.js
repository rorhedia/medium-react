/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./Popular.css";
import { Typography, Row, Col, Avatar } from "antd";
import CustomCard from "../../components/CustomCard";
import { getPosts } from "../../services.js";

const { Title, Paragraph } = Typography;

function Popular() {
  const [posts, getPostsRemote] = useState([]);

  useEffect(() => {
    // let idBlog = window.location.pathname.split("/")[2];
    getPosts().then((data) => {
      let usersArr = [];
      for (const key in data) {
        data[key]["key"] = key;
        usersArr.push(data[key]);
      }

      getPostsRemote(usersArr);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 14, offset: 2 }}
          lg={{ span: 14, offset: 2 }}
        >
          <Title level={3} className="titleMedium">
            Popular on Medium
          </Title>
          <Paragraph className="SubtitleMedium" type="secondary">
            What’s trending on Medium right now.
          </Paragraph>
          <img
            className="imageP"
            src="https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU"
          />
          <Title level={3} className="titleMedium">
            How Fortnite Baited Apple Into a Losing Battle
          </Title>
          <Paragraph className="SubtitleMedium" type="secondary">
            Epic Games’ ambush shows how antitrust scrutiny has changed the app
            store landscape
          </Paragraph>
          <div className="author">
            <div>
              <Avatar
                margin-right={0}
                size={50}
                src="https://herway.net/wp-content/uploads/2019/10/woman-posing-for-photo-with-blue-wall-behind.jpg"
              />
            </div>
            <div>
              <ol>Iliana Maldonado</ol>
              <ol>Aug 18, 2020 · 6 min read</ol>
            </div>
          </div>
          <br></br>
          <Paragraph>LATEST</Paragraph>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col
          className="containerCMT"
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 14, offset: 2 }}
          lg={{ span: 14, offset: 2 }}
        >
          {posts &&
            posts.map((post) => <CustomCard key={post.key} card={post} />)}
        </Col>
      </Row>
      <footer className="footer">
        <div className="logoFooter">
          <img
            src="https://miro.medium.com/max/968/1*uLuWzCXfq2rt1t_TkuLB8A.png"
            height="40px"
          />
        </div>
        <div className="textFooter">
          <ol>About</ol>
          <ol>Help</ol>
          <ol>Legal</ol>
        </div>
      </footer>
    </div>
  );
}

export default Popular;
