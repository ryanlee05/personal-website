import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Welcome from './Components/Welcome.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
