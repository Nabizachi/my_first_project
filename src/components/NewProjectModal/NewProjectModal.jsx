import React, { useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import "./NewProjectModal.css"

const NewProjectModal = ({ active, setActive }) => {
    const [count, setCount] = useState(1)
    return (
        <div className={active ? "createProjectModal active" : "createProjectModal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation}>
                <MyButton onClick={() => setCount(count + 1)}>{count} </MyButton>
            </div>
        </div>
    )
}

export default NewProjectModal