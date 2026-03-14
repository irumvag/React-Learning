import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className='device-view'>
      <Info />
      <div className='body-content'>
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
    <div>
      <hr />
      <Contact />
    </div>
    </>
  )
}

export default App
