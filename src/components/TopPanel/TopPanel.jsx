import React from "react";
import './TopPanel.css'
import MyButton from '../../UI/MyButton/MyButton'
import Logo from '../../Images/logo.png'


const TopPanel = () => {
    return (
        <header className="header">
            <div className="logoBox">
                <div className="logoImage">
                    <img src={Logo} alt='/' />
                </div>


                <div className="logoText">
                    <h1 > Конструкторский отдел</h1>
                </div>
            </div>

            <div>
                <ul className="menu">
                    <li><MyButton>Домой</MyButton></li>
                    <li><MyButton>В работе</MyButton></li>
                    <li><MyButton>Дополнительно</MyButton></li>
                    <li><MyButton>Решенные</MyButton></li>
                </ul>
            </div>
        </header >
    )
}

export default TopPanel