import React, {useState, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Header from '../Header'
const Layout = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    const isLogin = localStorage.getItem('isLogin')
    if(!isLogin) {
      navigate('/auth/signin')
    }
  },[])

  return (
    <div className='flex'>
        <Sidebar/>
        <div>
          {/* <Header/> */}
          <div className='mt-2 px-2'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout