import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button } from "antd";
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
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Form firstField={false} onSubmit={this.handleSubmit}>
          <FormItem>
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
          <FormItem>
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
    );
  }
}
const WrappedApp = Form.create()(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
