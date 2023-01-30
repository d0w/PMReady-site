import React from 'react'
import './App.css'
import './index.css'

import { About, Events, Footer, Header, Navbar, Contact } from './components/index.js';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        <div>
        </div>
            <About />
            <Contact />
            <Events />
            <Footer />
        </div>
    </div>
    
        
  )
}

export default App;