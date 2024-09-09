import React, {useState, useEffect} from 'react'
import {Layout, Menu} from 'antd'
import {DashboardOutlined,} from '@ant-design/icons';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
const { Sider } = Layout


function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

const items = [
    getItem('Dashboard', '/', <DashboardOutlined />),
    getItem('Income', '/income', <RiMoneyDollarCircleLine />),
    getItem('Expense', '/expenses', <FaMoneyBillTransfer />),
];


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768)
    const navigate = useNavigate()
    const onClickMenu = (item) => {
        console.log(item);
        navigate(item.key);
    };

    useEffect(() => {
      const resizeScreen = () => {
        const isSmall = window.innerWidth <= 768;
        setIsSmallScreen(isSmall);
        if (isSmall) {
          setCollapsed(true);
        } else {
          setCollapsed(false);
        }
      }

      resizeScreen()

      // Event listener for window resize
    window.addEventListener('resize', resizeScreen);

    // Cleanup the event listener when component unmounts
    return window.removeEventListener('resize', resizeScreen);
    },[])  
  return (
    <>
        <Sider collapsible={!isSmallScreen} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            {/* <div className="demo-logo-vertical" /> */}
            <div className='m-3 flex justify-center items-center'>
            <Link to={'/'}>
            <img
                src={Logo}
                alt="Logo"
                className='max-h-full max-w-full'
            />
            </Link>
            </div>
            <Menu onSelect={onClickMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    </>
  )
}

export default Sidebar