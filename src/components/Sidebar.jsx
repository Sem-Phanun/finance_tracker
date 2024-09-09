import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import {MdSpaceDashboard} from 'react-icons/md'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import Logo from '../assets/logo.png'
const Sidebar = () => {

    const [enable, setEnable] = useState(true)
    const menu = [
        {
            id: 1,
            title: "Dashboard",
            path: '/',
            icons: <MdSpaceDashboard />
        },
        {
            id: 1,
            title: "Icomes",
            path: '/income',
            icons: <FaMoneyCheckAlt />
        },
        {
            id: 1,
            title: "Expense",
            path: '/expenses',
            icons: <GrMoney />
        },
    ]
  return (
    <>
        <aside className={`bg-primary h-[100vh] ${enable ? 'w-[15vw]' : 'w-20'} duration-300 relative`}>
                
            <ul className='flex flex-col px-8 my-4'>
            <IoIosArrowBack className={`bg-white border rounded-full absolute -right-3 size-6 border-primary cursor-pointer ${!enable && 'rotate-180'}`}
                    onClick={()=> setEnable(!enable)}
            />
                <li>
                    <Link to={"/"} >
                        <img src={Logo}/>
                    </Link>
                </li>
                {
                    menu.map((menu, index)=> {
                        return(
                            <li key={index} className={`flex items-center ${enable ? 'gap-x-4 hover:bg-white' : 'justify-center'}  p-2 rounded-sm`}>
                                <NavLink to={menu.path} className={`flex items-center`}>
                                    <span className='p-2'>{menu.icons}</span>
                                    <span className={`${!enable && 'hidden'}`}>{menu.title}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
                    
            </ul>
        </aside>
    </>
  )
}

export default Sidebar