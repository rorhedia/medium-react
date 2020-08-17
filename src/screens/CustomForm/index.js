import React from "react";
import "./CustomForm.css";
import { Form, Input, InputNumber, Button } from "antd";
import { Row, Col } from "antd";

function CustomForm() {
  return (
    <body>
      <Row className="containerForm">
        <Col className="formD" span={10} push={2}>
          <Form name="POST">
            <Form.Item className="itemGenerico" label="Tittle">
              <Input />
            </Form.Item>
            <Form.Item className="itemGenerico" label="Text">
              <Input.TextArea />
            </Form.Item>
            <Form.Item className="itemGenerico" label="Image">
              <Input />
            </Form.Item>
            <Form.Item className="itemGenerico" label="Author">
              <Input />
            </Form.Item>
            <Form.Item className="itemGenerico" label="Date">
              <Input />
            </Form.Item>

            <Row>
              <Col span={12} push={8}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item className="buttonDelete">
                  <Button type="secondary" htmlType="submit">
                    Delete
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={14} push={3}>
          <img
            className="imagenFrom"
            src="http://127.0.0.1:5503/images/1_90cu6c0u4ZL8H8ic1woZDw@2x.png"
          ></img>
        </Col>
      </Row>
    </body>
  );
}

export default CustomForm;
