import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import "./NewProjectModal.css"

const NewProjectModal = ({ active, setActive }) => {
    return (
        <div className={active ? "createProjectModal active" : "createProjectModal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation}>
                <MyButton>серега чмырь</MyButton>
            </div>
        </div>
    )
}

export default NewProjectModal