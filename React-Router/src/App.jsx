import { useState } from 'react'
import {React} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from './Pages/Greeting'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import './App.css'
import PageNotAvailable from './Pages/PageNotAvailable'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="greet" element={<Greeting/>}/>
          <Route path='*' element={<PageNotAvailable />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
