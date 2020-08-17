import React from "react";
import "./CustomForm.css";
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";

function CustomForm() {
  const createPost = (data) => {
    let created = Math.floor(Date.now() / 1000);

    data["created"] = created;
    fetch("https://reactsessions-ac545.firebaseio.com/equipotres.json", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => console.log(response));
  };

  const { REACT_APP_URL_IMAGES } = process.env;
  let photo = `${REACT_APP_URL_IMAGES}/Fondo-from.png`;

  return (
    <Row className="containerForm">
      <Col className="formD" span={10} push={2} xs={24} sm={24} md={12} lg={12}>
        <Form onFinish={createPost}>
          <Form.Item name="title" className="itemGenerico" label="Tittle">
            <Input />
          </Form.Item>
          <Form.Item name="text" className="itemGenerico" label="Text">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="author" className="itemGenerico" label="Author">
            <Input />
          </Form.Item>
          <Form.Item name="urlimage" className="itemGenerico" label="Image">
            <Input />
          </Form.Item>
          <Form.Item
            name="paragraph"
            className="itemGenerico"
            label="Paragraph"
          >
            <Input />
          </Form.Item>
          <Form.Item name="company" className="itemGenerico" label="Company">
            <Input />
          </Form.Item>

          <Row xs={24} sm={24} md={24} lg={24}>
            <Col className="bottonR" span={12} push={11}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col span={14} push={3} xs={24} sm={24} md={12} lg={12}>
        <img className="imagenFrom" src={photo} alt="img-form" />
      </Col>
    </Row>
  );
}

export default CustomForm;
