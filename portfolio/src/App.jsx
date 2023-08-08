import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import ProjectList from './components/ProjectList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
      <Nav />
      <ProjectList />
      
    </>
  )
}

export default App;
