import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
  )
}

export default App;
