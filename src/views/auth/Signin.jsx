import React from 'react';
import { Form, Input, Button, Layout, Row, Col } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Signin = () => {
  const onFinish = (values) => {
    console.log('Form Submitted with values:', values);
    // Handle signup logic here
  };

  return (
    <Layout className='h-[100vh]'>
      <Content>
        <Row
          justify="center"
          align="middle"
          style={{ height: '100vh', margin: 0 }}
        >
          <Col xs={22} sm={18} md={14} lg={10}>
            <section style={{
              margin: 'auto'
            }} className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 w-[390px] h-auto max-h-[70vh] max-sm:w-[290px]'
            >
              <span className='text-center font-bold -mt-3 text-lg'>Sign In</span>
              <Form
                name="signup"
                onFinish={onFinish}
                layout="vertical"
                style={{ width: '100%'}}
              >
                {/* Email Field */}
                <Form.Item
                  name="email or username"
                  label="Email or Username"
                  rules={[
                    { required: true, message: 'Please input your email or username!' },
                    { type: 'email or username', message: 'Please enter a valid email address or username!' },
                  ]}
                  style={{
                    width: 'auto',
                  }}
                >
                  <Input prefix={<MailOutlined />} placeholder="Email or Username" />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  style={{
                    width: 'auto',
                  }}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item
                  style={{
                    width: 'auto',
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{ marginBottom: '16px' }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>

                {/* Link to Sign In */}
                <Form.Item>
                  <p className='text-center mt-[1rem]'>
                    You don't have an account? <Link to="/auth/signup">Sign In</Link>
                  </p>
                </Form.Item>
              </Form>
            </section>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Signin
