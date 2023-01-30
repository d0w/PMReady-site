import React from 'react'
import './App.css'
import './index.css'

import { About, Blog, Footer, Header, Navbar, Contact } from './components/index.js';

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
            <Blog />
            <Footer />
        </div>
    </div>
    
        
  )
}

export default App;