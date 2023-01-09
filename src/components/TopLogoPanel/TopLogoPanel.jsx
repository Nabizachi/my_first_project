import React from "react";
import './TopLogoPanel.css'
import Logo from '../../Images/logo.png'
import MyButton from '../../UI/MyButton/MyButton'


const TopLogoPanel = () => {
    return (
        <div className="logoPanel">
            <div className="imageButtonBox">
                <div className='logoPanelImage'>
                    <img className="logoImage" src={Logo} alt='/' />
                </div>
                <div className="buttonBox">
                    <MyButton>Проекты</MyButton>
                    <MyButton>Актуальное КД</MyButton>
                    <MyButton>Склад</MyButton>
                </div>
            </div>
            <div className="logoPanelText">
                <p>Портал конструкторского отдела</p>
            </div>
            <div className="logoPanelButton">
                <MyButton >Войти</MyButton>
            </div>
        </div>
    )
}

export default TopLogoPanel