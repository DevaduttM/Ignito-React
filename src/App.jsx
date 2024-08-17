import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Preloader from './components/preloader/preloader'

const App = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route index element = {<Home />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App