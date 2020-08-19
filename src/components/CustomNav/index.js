import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Ant Design
import { Row, Col } from "antd";

// CSS
import "./CustomNav.css";

function CustomNav(props) {
  const dataNavbar = [
    "HOME",
    "POPULAR",
    "MOMENTUM",
    "CORONAVIRUS",
    "ONEZERO",
    "ELEMENTAL",
    "GEN",
    "ZORA",
    "FORGE",
    "MARKER",
    "LEVEL",
    "HEATED",
  ];

  const listItems = dataNavbar.map((data, idx) => {
    let href = data.toLowerCase();

    return (
      <Link key={idx} to={`/${href}`} className="link-url">
        {data}
      </Link>
    );
  });

  const leftScroll = () => {
    const navbar = document.querySelector(".navbar");
    navbar.scrollBy(-100, 0);
  };

  const rightScroll = () => {
    const navbar = document.querySelector(".navbar");
    navbar.scrollBy(100, 0);
  };

  return (
    <Row className="posititon-stiky">
      <Col span={2} className="nav-control-left">
        <svg
          onClick={leftScroll}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fill-rule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
          />
        </svg>
      </Col>

      <Col span={20} className="">
        <nav className="">
          <ul className="navbar">{listItems}</ul>
        </nav>
      </Col>

      <Col span={2} className="nav-control-right">
        <svg
          onClick={rightScroll}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fill-rule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </Col>
    </Row>
  );
}

export default CustomNav;
