import React from "react";
import './TopPanel.css'
import MyButton from '../../UI/MyButton/MyButton'


const TopPanel = () => {
    return (
        <div className="topPanel">
            <ul>
                <li><MyButton>Домой</MyButton></li>
                <li><MyButton>В работе</MyButton></li>
                <li><MyButton>Дополнительно</MyButton></li>
                <li><MyButton>Решенные</MyButton></li>

            </ul>

        </div >
    )
}

export default TopPanel