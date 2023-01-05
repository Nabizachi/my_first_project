import React from "react";
import './TopPanel.css'
import MyButton from '../../UI/MyButton/MyButton'
import Logo from '../../Images/logo.png'


const TopPanel = () => {
    return (
        <div className="header">
            <div className="logoBox">
                <div className="logoImage">
                    <img src={Logo} alt='/' />
                </div>

                <div className="logoText">
                    <h1 > Конструкторский</h1>
                    <h1> отдел</h1>
                </div>
            </div>

            <div className="menu">

                <MyButton>Домой</MyButton>
                <MyButton>В работе</MyButton>
                <MyButton>Дополнительно</MyButton>
                <MyButton>Решенные</MyButton>

            </div>
        </div >
    )
}

export default TopPanel