import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants';

const LoginForm = ({ onLogin }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const loginRequest = { ...values };

    login(loginRequest)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        onLogin();
      })
      .catch(error => {
        if (error.status === 401) {
          notification.error({
            message: 'Polling App',
            description: 'Your Username or Password is incorrect. Please try again!',
          });
        } else {
          notification.error({
            message: 'Polling App',
            description: error.message || 'Sorry! Something went wrong. Please try again!',
          });
        }
      });
  };

  return (
    <Form
      form={form}
      name="login_form"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="usernameOrEmail"
        rules={[{ required: true, message: 'Please input your username or email!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username or Email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="login-form-button"
        >
          Login
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
