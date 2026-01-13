import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import Welcome from './Components/WelcomePage/Welcome.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Navigate to="/about" replace />} />
          <Route path = "/about" element = {<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
