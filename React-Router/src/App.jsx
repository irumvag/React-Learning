import { useState } from 'react'
import {React} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from './Pages/Greeting'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'
import './App.css'
import PageNotAvailable from './Pages/PageNotAvailable'
import Clock from './Pages/Clock'
import MessageWithEvent from './component/messageWithEvent'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="greet" element={<Greeting/>}/>
          <Route path="welcome" element={<Welcome name='Gad'/>}/>
          <Route path='clock' element={<Clock/>}/>
          <Route path='log' element={<MessageWithEvent name="Gad"/>}/>
          <Route path='*' element={<PageNotAvailable />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
