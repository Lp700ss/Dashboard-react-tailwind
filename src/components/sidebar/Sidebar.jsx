import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import {UilSignOutAlt } from "@iconscout/react-unicons";

import { SidebarData } from '../../Data/Data';


const Sidebar = () => {
    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    Sh<span>o</span>ps
                </span>
             </div>

            {/* menu */}

            <div className="menu">
              {SidebarData.map((item, index) => {
                return(
                    <div className="menuItem">
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                     </div>
                )
              })}   

                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>

        

    )
}

export default Sidebar
