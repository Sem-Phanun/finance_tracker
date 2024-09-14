import React,{useEffect, useState} from 'react'
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Dropdown } from 'antd'
import { IoMdNotificationsOutline } from "react-icons/io";
import { useParams } from 'react-router-dom';
import {getCurrentUser} from '../service/helperService'
const Header = () => {
  const [username, setUsername] = useState('')
  const {userId} = useParams()
  const user = getCurrentUser()
  const handleLogout = () => {
    localStorage.removeItem('token')
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
    <header className="p-4 mx-4 mt-2 bg-white rounded-lg flex justify-end">
      <Space direction="vertical" size={16}>
        <Space wrap size={24}>
          <Badge count={5} overflowCount={99}>
            <IoMdNotificationsOutline size={30} cursor={"pointer"}/>
          </Badge>
          <Badge>
            <div className="avatar online">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <Space size={4} className='mx-2'>
              <p>{user.username}</p>
            </Space>
          </Badge>
          <Dropdown menu={{ items:items }} className='cursor-pointer'>
            <Space>
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Space>
    </header>
  )
}

export default Header