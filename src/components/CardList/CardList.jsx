import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const styles = {
    ul: {
        listStyle: 'none', margin: 0, padding: 0
    }
}

function CardList(props) {
    return (
        <ul style={styles.ul}>
            {props.cards.map((card, index) => {
                return <ProjectCard card={card} key={card.id} index={index} onChange={props.onToggle} />
            })}
        </ul>
    )
}


export default CardList