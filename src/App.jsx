import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Preloader from './components/preloader/preloader'
import Events from './components/events/events'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route index element = {<Home />} />
          <Route path='events' element = { <Events />} />
          <Route path='contact' element = { <Contact />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App