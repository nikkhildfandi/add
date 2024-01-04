import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
    </>
  )
}

export default App