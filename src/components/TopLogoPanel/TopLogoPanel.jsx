import React from "react";
import './TopLogoPanel.css'
import Logo from '../../Images/logo.png'


const TopLogoPanel = () => {
    return (
        <div className="logoPanel">
            <div className='logoPanelImage'>
                <img className="logoImage" src={Logo} alt='/' />
            </div>
            <div className="logoPanelText">
                <p>Портал конструкторского отдела</p>
            </div>
        </div>
    )
}

export default TopLogoPanel