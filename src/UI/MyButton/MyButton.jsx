import React from 'react'
import './MyButton.css'


const MyButton = ({ children }) => {


    return (
        <button className='myBtn' > {children} </button >
    )
}

export default MyButton