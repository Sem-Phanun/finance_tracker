import React,{useState} from 'react'
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Dropdown } from 'antd'
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    window.location.href = '/auth/signin'
  }
  const items = [
    {
      key: '1',
      label: (
        <a>
          settings
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={handleLogout}>
          logout
        </a>
      ),
      danger: true,
    },
  ];

  return (
    <header className="p-6 mx-4 mt-2 bg-white rounded-lg flex justify-end">
      <Space direction="vertical" size={16}>
        <Space wrap size={24}>
          <Badge count={5} overflowCount={99}>
            <IoMdNotificationsOutline size={30} cursor={"pointer"}/>
          </Badge>
          <Badge>
            <Avatar icon={<UserOutlined />} className='cursor-pointer' />
          </Badge>
          <Dropdown menu={{ items:items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </Space>
    </header>
  )
}

export default Header