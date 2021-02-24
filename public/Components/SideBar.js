import React from 'react'
import dashboardStyles from '../../styles/dashboard/Dashmenu.module.css'
import Link from 'next/link'
import { IconContext } from "react-icons";
import { RiDashboard3Line } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { GrNotification, GrUserManager, GrSettingsOption, GrHelp } from 'react-icons/gr'

const menuItems = [
    {
      name: 'Dashboard',
      icon: <IconContext.Provider value={{ size: '25px', className: "react-icons" }}>
        <RiDashboard3Line />
        </IconContext.Provider>,
      subMenu: [],
      status: 'active',
      link: '/'
    },
    {
      name: 'Sales',
      icon: <IconContext.Provider value={{ size: '25px', className: "react-icons" }}>
        <AiOutlineShop />
        </IconContext.Provider>,
      subMenu: [],
      status: '',
      link: '/sales/sales'
    },
    {
      name: 'Purchase',
      icon: <IconContext.Provider value={{ size: '25px', className: "react-icons" }}>
        <MdAddShoppingCart />
        </IconContext.Provider>,
      subMenu: [],
      status: '',
      link: '/purchases/purchases'
    },
    {
      name: 'Report',
      icon: <IconContext.Provider value={{ size: '25px', className: "react-icons" }}>
        <HiOutlineDocumentReport />
        </IconContext.Provider>,
      subMenu: [],
      status: '',
      link: ''
    }
]

export default class SideBar extends React.Component{
    render(){
        return(
            <section className={dashboardStyles.menuSection}>
                <ul className={dashboardStyles.menuUL}>
                    {
                    menuItems.map((obj, index)=>{
                        //obj.status=='active' ? alert(obj.status): alert(null)
                        return(
                        <Link key={index} href={`${obj.link}`} style={{display: 'flex'}}>
                            <a className={dashboardStyles.menuLinks} key={index}>
                            {obj.icon}
                            <li key={index} className={dashboardStyles.menuLI}>{obj.name}</li>
                            </a>
                        </Link>
                        )
                    })
                    }
                </ul>
            </section>
        )
    }
}