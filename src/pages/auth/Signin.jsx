import React, { useEffect } from 'react';
import { Form, Input, Button, Layout, Row, Col, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link,useNavigate } from 'react-router-dom';
const { Content } = Layout;
import { login } from '../../service/helperService'

const Signin = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const onFinish = async (values) => {
    try {
      const response = await login(values)
      navigate("/")
      
      message.success('Login successful');
    } catch (error) {
      console.error("Login error:", error);
        
        if (error.status === 401) {
          message.error('Invalid username or password. Please try again.');
        }else if (error.status === 403) {
          message.error('Invalid password or password. Please try again.');
        }else {
            const errorMessage = error.data && error.data.message ? error.data.message : 'Login failed. Please try again.';
            message.error(errorMessage);
        }
    }
  }
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
                form={form}
                name="signin"
                onFinish={onFinish}
                layout="vertical"
                style={{ width: '100%'}}
              >
                {/* Email Field */}
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                    { type: 'username', message: 'Please enter a valid username!' },
                  ]}
                  style={{
                    width: 'auto',
                  }}
                >
                  <Input prefix={<MailOutlined />} placeholder="Username" />
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
                    Sign In
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
