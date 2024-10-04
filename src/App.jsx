import React from 'react'

import Blurbackground from './components/Blurbackground'
import Navbar from './components/Navbar'
import Herosection from './components/hero/Herosection'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contacts/Contact'

const App = () => {
  return (
    <div>
      <Blurbackground/>
      <main className='antialiased overflow-x-hidden max-w-7xl mx-auto
      relative z-10'>
      <Navbar/>
      <Herosection/>
      <Projects/>
      <About/>
      <Experience/>
      <Contact/>
      </main>
    </div>
  )
}

export default App
