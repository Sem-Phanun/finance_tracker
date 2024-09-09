import React, { useState } from 'react';
import {  Layout,  theme } from 'antd';
import { Outlet } from 'react-router-dom';
const {Content, Footer } = Layout;
import Sidebar from '../Sidebar'
import Header from '../Header';

const LayoutDashboard = () => {

  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout
      className='h-[100vh]'
    >
      <Sidebar/>
      <Layout>

        <Header/>
          
        <Content
          style={{
            margin: '26px 16px',
          }}
        >

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Kai the dev ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;