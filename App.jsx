// import React from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './src/Component/Registration'
import ClientsCard from './src/Component/common/ClientsCard'
import New from './src/Component/New'
import SearchBar from './src/Component/SearchBar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/a" element={<><New/><SearchBar/><ClientsCard /><ClientsCard /><ClientsCard /><ClientsCard /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
