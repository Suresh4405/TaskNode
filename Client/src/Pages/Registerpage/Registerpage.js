import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../Apicalls/user"; // Assuming this function handles API call for user registration
import "./register.css"; // Import CSS file for component styling

const Registerpage = () => {
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
        console.log(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <Form
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="form-title">Register</h1>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobilenumber"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit mobile number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Profile URL"
            name="profileUrl"
            rules={[{ required: true, message: "Please input your profile image URL!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 7, span: 17 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 7, span: 17 }}>
            <Button type="primary" htmlType="submit" className="register-button">
              Register
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 7, span: 17 }}>
            <Link to="/login" className="login-link">
              Already have an account? Login
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Registerpage;
