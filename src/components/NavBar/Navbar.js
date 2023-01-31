import { React, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./Navbar.css"

// BEM Naming used

// TODO: Eventually replace a tags with actual <Link> using react router dom

const logo = "logo holder";

const Links = () => {
  return(
    <>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/events">Events</Link></p>
      <p><Link to="/contact">Contact Us</Link></p>
    </>
  )
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pm__navbar">
      <div className="pm__navbar-links">
        <div className="pm__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="pm__navbar-links_container">
          <Links />
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
              <Links />
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar