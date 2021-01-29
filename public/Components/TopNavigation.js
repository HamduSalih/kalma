import React from 'react'
import topmenustyles from '../../styles/topmenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IconContext } from "react-icons";
import { RiDashboard3Line } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { GrNotification, GrUserManager, GrSettingsOption, GrHelp } from 'react-icons/gr'


export default class TopNav extends React.Component{
    state = {
        settingsTip : false,
        helpTip : false,
        notificationTip : false
    }
    render(){
        return(
            <div>
                <section className={topmenustyles.container}>
                    <div className={topmenustyles.logoDiv}>
                        <Link href="#">
                        <a style={{padding: 0, margin: 0}}>
                            <Image 
                            src={'/logo.png'} 
                            alt='logo here'
                            width={50}
                            height={44}
                            className={topmenustyles.logoImg}
                            />
                        </a>
                        </Link>
                        <Link href="#">
                        <a style={{marginLeft: '10px'}}>
                            <h4 style={{fontSize: '22px', fontFamily: 'segoe script', fontWeight: 'bold', padding: 0, margin: 0}}>kalma</h4>
                        </a>
                        </Link>
                    </div>

                    <div className={topmenustyles.toolsDiv}>
                        <div className={topmenustyles.iconsDiv}>
                        <Link href="#">
                            <a>
                            <IconContext.Provider value={{ size: '25px', className: 'react-icons-top' }}>
                                <GrUserManager />
                            </IconContext.Provider>
                            </a>
                        </Link>
                        </div>
                        <div className={topmenustyles.iconsDiv}>
                        <Link href="#">
                            <a onMouseEnter={()=> this.setState({settingsTip: true})} onMouseLeave={()=> this.setState({settingsTip: false})}>
                            <IconContext.Provider value={{ size: '25px', className: 'react-icons-top' }}>
                                <GrSettingsOption />
                            </IconContext.Provider>
                            </a>
                        </Link>
                        {
                            this.state.settingsTip &&
                            <p className={topmenustyles.customTooltip}>Settings</p>
                        }
                        </div>
                        <div className={topmenustyles.iconsDiv}>
                        <Link href="#">
                            <a onMouseEnter={()=> this.setState({notificationTip: true})} onMouseLeave={()=> this.setState({notificationTip: false})}>
                            <IconContext.Provider value={{ size: '25px', className: 'react-icons-top' }}>
                                <GrNotification />
                            </IconContext.Provider>
                            </a>
                        </Link>
                        {
                            this.state.notificationTip &&
                            <p className={topmenustyles.customTooltip}>Notifications</p>
                        }
                        </div>
                        <div className={topmenustyles.iconsDiv}>
                        <Link href="#">
                            <a onMouseEnter={()=> this.setState({helpTip: true})} onMouseLeave={()=> this.setState({helpTip: false})}>
                            <IconContext.Provider value={{ size: '25px', className: 'react-icons-top' }}>
                            <GrHelp />
                            </IconContext.Provider>
                            </a>
                        </Link>
                        {
                            this.state.helpTip &&
                            <p className={topmenustyles.customTooltip}>Help</p>
                        }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}