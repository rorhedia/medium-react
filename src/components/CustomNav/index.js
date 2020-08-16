import React from "react";

// Ant Design
import { Row, Col } from "antd";

// CSS
import "./CustomNav.css";

function CustomNavbar() {
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
    "HUMAN PARTS",
    "MARKER",
    "LEVEL",
    "HEATED",
    "MORE",
  ];

  const listItems = dataNavbar.map((data, idx) => {
    let href = data;

    if (data === "HUMAN PARTS") {
      href = "human-parts";
    }

    return (
      <li key={idx}>
        <a href={`/${href.toLowerCase()}`}>{data}</a>
      </li>
    );
  });

  return (
    <Row className="posititon-stiky">
      <Col span={2} className="nav-control-left">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
          />
        </svg>
      </Col>

      <Col span={20} className="">
        <nav>
          <ul className="">{listItems}</ul>
        </nav>
      </Col>

      <Col span={2} className="nav-control-right">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </Col>
    </Row>
  );
}

export default CustomNavbar;
