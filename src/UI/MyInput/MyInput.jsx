import React from 'react'
import './MyInput.css'


const MyInput = ({ children }) => {


    return (
        <input className='myInput' > {children} </input >
    )
}

export default MyInput