import React from "react";
import './TopPanel.css'
import MyButton from '../../UI/MyButton/MyButton'
import Logo from '../../Images/logo.png'


const TopPanel = () => {
    return (
        <div className="buttonsMenu">
            <MyButton>Проекты</MyButton>
            <MyButton>Актуальное КД</MyButton>
            <MyButton>Склад</MyButton>
        </div >
    )
}

export default TopPanel