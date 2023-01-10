import React, { useContext } from "react";
import './ProjectCard.css'
import Context from '../../context'
import MyButton from "../../UI/MyButton/MyButton";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '2px solid #ccccff',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}


const ProjectCard = ({ card, index, onChange }) => {
    const { removeCard } = useContext(Context)
    const classes = []
    if (card.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type='checkbox' onChange={() => onChange(card.id)} checked={card.completed} />
                <strong>{index + 1}</strong>
                &nbsp;
                {card.names}
                &nbsp;
            </span>
            <MyButton onClick={removeCard.bind(null, card.id)}>&times;</MyButton>
        </li >
    )
}

export default ProjectCard