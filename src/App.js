import React from "react"
import './styles/App.css'
import TopLogoPanel from "./components/TopLogoPanel/TopLogoPanel"
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  return (
    <div >
      <div>
        <TopLogoPanel />
      </div>
      <div className="space">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div >
  )
}

export default App;
