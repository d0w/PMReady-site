import { React, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./Navbar.css"

// BEM Naming used

const logo = "logo holder";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pm__navbar">
      <div className="pm__navbar-links">
        <div className="pm__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="pm__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#events">Events</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
      <div className="pm__navbar-menu">
        { toggleMenu ? 
        <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : 
        <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="pm__navbar-menu_container scale-up-center">
            <div className="pm__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#events">Events</a></p>
              <p><a href="#contact">Contact Us</a></p>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar