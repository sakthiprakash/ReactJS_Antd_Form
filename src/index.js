import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
//import "antd/lib/input/style";
// import { FormComponentProps } from "antd/lib/form";

import "./styles.css";

export default class App extends React.Component {
  // constructor(props: FormComponentProps) {
  //   super(props);
  // }
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll(
      ["first", "last"],
      { first: true },
      (err, values) => {
        if (!err) {
          console.log("stest");
        }
      }
    );
  };
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App" col-md-10>
        <Row>
          <Col offset="2" lg={12} sm={12} xs={12}>
            <div>
              <Form
                layout="horizontal"
                firstField={false}
                onSubmit={this.handleSubmit}
              >
                <FormItem
                  label="First Name"
                  labelCol="{span:9}"
                  wrapperCol="{span:13}"
                >
                  {getFieldDecorator("first", {
                    rules: [
                      { required: true, message: "Please input your note!" },
                      {
                        pattern: /[a-zA-Z]/,
                        message: "Please enter valid first name!"
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem label="Last Name">
                  {getFieldDecorator("last", {
                    rules: [
                      { required: true, message: "Please input your note!" },
                      {
                        pattern: /[a-zA-Z]/,
                        message: "Please enter valid first name!"
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </FormItem>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>test</Col>
          <Col xs={12}>test</Col>
          <Col>test</Col>
        </Row>
        <Row>
          <Col xs={6}>col-6 col-offset-0</Col>
        </Row>
        <Row>
          <Col xs={6} offset={1}>
            col-6 col-offset-1
          </Col>
        </Row>
        <Row>
          <Col xs={6} offset={2}>
            col-6 col-offset-2
          </Col>
        </Row>
        <Row>
          <Col xs={6} offset={3}>
            col-6 col-offset-3
          </Col>
        </Row>
        <Row>
          <Col xs={6} offset={4}>
            col-6 col-offset-4
          </Col>
        </Row>
        <Row>
          <Col xs={6} offset={5}>
            col-6 col-offset-5
          </Col>
        </Row>
        <Row>
          <Col xs={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
      </div>
    );
  }
}
const WrappedApp = Form.create()(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
