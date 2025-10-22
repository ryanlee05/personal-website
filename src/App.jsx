import { useState } from 'react'
import './App.css'



import Welcome from "./Components/Welcome.jsx"
import Navigation from "./Components/Navigation.jsx"
import About from "./Components/About.jsx"

function App() {

  return (
    <>
      <Navigation/>
      <Welcome/>
      <About/>
    </>
  )
}

export default App
