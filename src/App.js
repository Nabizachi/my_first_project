import React, { useState } from "react"
import './styles/App.css'
import Context from './context'
import TopLogoPanel from "./components/TopLogoPanel/TopLogoPanel"
import AddProjectCard from "./components/AddProjectCard/AddProjectCard";
import CardList from "./components/CardList/CardList";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import MyButton from "./UI/MyButton/MyButton";

function App() {


  const [modalActive, setModalActive] = useState(true)

  const [cards, setCards] = useState([
    // { id: 1, names: 'VK-05', engeneer: 'Bobrov G', completed: '100%', fullCompleted: false },
    { id: 1, names: 'VK-05', fullCompleted: false },
  ])

  function toggleCard(id) {
    setCards(cards.map(card => {
      if (card.id === id) {
        card.completed = !card.completed
      }
      return card
    })
    )
  }

  function removeCard(id) {
    setCards(cards.filter(card => card.id !== id))
  }

  function addCard(names) {
    setCards(
      cards.concat([
        {
          id: Date.now(),
          names,
          fullCompleted: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeCard }}>
      <div >
        <NewProjectModal active={modalActive} setActive={setModalActive} />
        <div>
          <TopLogoPanel />
        </div>
        <div className="space">
          <h1>Проекты</h1>
          <AddProjectCard onCreate={addCard} />
          {
            cards.length
              ?
              <CardList cards={cards} onToggle={toggleCard} />
              :
              <h2>Проектов нет</h2>
          }
          <MyButton onClick={() => setModalActive(true)}> Создать проект</MyButton>
        </div>
      </div >
    </Context.Provider>
  )
}

export default App;
