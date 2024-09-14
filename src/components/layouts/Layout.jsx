import React, { useEffect, useState } from 'react';
import {  Layout,  theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const {Content} = Layout;
import Sidebar from '../Sidebar'
import Header from '../Header';
import Footers from '../Footer';

const LayoutDashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const login = localStorage.getItem('token')
    if(login == null) {
      navigate("/auth/signin")
    }
  },[])

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout className='h-auto'>
      <Sidebar/>
      <Layout>
        <Header/>
        <Content style={{margin: '26px 16px'}} >

          <div
            style={{
              padding: 4,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footers/>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;