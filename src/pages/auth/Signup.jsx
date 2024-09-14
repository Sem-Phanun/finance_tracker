import React from 'react';
import { Form, Input, Button, Layout, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link,useNavigate } from 'react-router-dom';
import { register } from '../../service/helperService';

const { Content } = Layout;

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()


  const onFinish = async(values) => {
    try {
      
      const response = await register(values)
      console.log(values);
      navigate("/")
      message.success(response.message || 'Registration successful!');
    } catch (error) {
      message.error(error.message || 'Registration failed!');
    }
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
            <section className='bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 h-auto max-h-[90vh] md:max-h-[100vh] max-sm:max-h-[100vh]'
            >
              <span className='text-center font-bold -mt-3 text-lg'>Sign Up</span>
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                layout="vertical"
                style={{ width: '100%' }}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Username Field */}
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                {/* Email Field */}
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email address!' },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
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
                  <p className='text-center mt-[-2rem]'>
                    Already have an account? <Link to="/auth/signin">Sign In</Link>
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

export default Signup;
