import { Language } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Collapse, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './toggle.css'

export default function Navb(props) {
  const [menu, setMenu] = useState(true);
  const menuItem = props.menuItem;

  // Menu Toggle Function
  function menuToggle() {
    let menubar = document.getElementById("nav-bar")
    setMenu(!menu)
    if (menu) {
      menubar.style.display = 'block'
    } else {
      menubar.style.display = 'none'
    }
  }

  useEffect(() => {
    /*===== LINK ACTIVE =====*/
    let linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
      }
    }
    linkColor.forEach(l => {
      if (!(l.tagName === 'P'))
        l.addEventListener('click', colorLink)
    })
    /*===== LINK ACTIVE END =====*/
  });


  return (
    <>
      {/* Mobile View Nav */}
      <Navbar bg="light">
        <Link to="/" className="nav_logo">
        <span className='logoN'>&nbsp;<b>N</b>&nbsp;</span>
          <span className="nav_logo-name">BrandName</span>
        </Link>
        <i className="bi bi-list" id="menu" style={{ width: '50px', fontSize: '30px' }} onClick={menuToggle}></i>
      </Navbar>
      {/* Mobile View Nav end */}

      <div className="animate__animated fadeInLeft l-navbar show dark" id="nav-bar">
        {/* Navbar */}
        <nav className="nav">

          <div>
            {/* Logo / Brand Name */}
            <Link to="/" className="nav_logo">
            <span className='logoN'>&nbsp;<b>N</b>&nbsp;</span>
              <span className="nav_logo-name">Name</span>
            </Link>
            {/* Logo / Brand Name End */}

            {/* MenuItems */}
            <div className="nav_list">
              {
                // Dynamically adds Menu Items using Iterations
                menuItem.map((item, key) => {
                  // Checks "is Menu Items having 0 Subitems?"
                  return (item.child.length === 0 ? (
                    // If yes then it print the Menu Item only
                    <MenuItem item={item} key={key} k={key} />
                  ) : (
                    // If no then it print the Menu Item with their Sub Menu Items
                    < >
                      {/* Here it prints the Main Menu Item */}
                      <p
                        key={key}
                        onClick={() => item.setOpen(!item.open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={item.open}
                        className={item.open ? "nav_link active" : "nav_link"}>

                        <i className={item.class} />
                        <span className="nav_name">

                          {item.name}
                          <i className='bx bx-chevron-down' />

                        </span>

                      </p>

                      {/* After that it prints Sub Menu Items inside this Collapse Tag of React-Bootstrap */}
                      <Collapse in={item.open} >
                        {/* Please Don't Remove this Div its Important to Display Sub Menu Item */}
                        <div id="example-collapse-text">
                          {
                            item.child.map((item, key) => (

                              <div key={key}>
                                <SubMenuItem item={item} key={key} k={key} />
                              </div>

                            ))
                          }
                        </div>

                      </Collapse>
                    </>
                  ))
                })
              }
            </div>
            {/* MenuItems */}

          </div>

          {/* Signout Button/ Profile */}
          <div className='nav-bottom'>
            <div>
              <button className='btn btn-trs' type='button'><span style={{background: '#3772FF', borderRadius: '50%', width: '10px', height: '10px'}}>&nbsp;<b>N</b>&nbsp;</span>&nbsp;$0.90</button>
              <button className='btn btn-xyz' type='button'>Buy $XYZ</button>
            </div>
            <div style={{marginTop: "1rem"}}>
              <Language style={{color: "#808191", marginRight: '1rem'}}/>
              <ThemeToggle />
            </div>  
          </div>

        </nav>
        {/* Navbar End */}
      </div>
    </>
  );
}


function MenuItem(props) {
  const [activeState, setActiveState] = useState((window.location.pathname === props.item.link) ? " active" : "");

  return (
    <Link to={props.item.link} key={props.k} className={"nav_link" + activeState} >
      <i className={props.item.class} />
      <span className="nav_name">{props.item.name}</span>
    </Link>
  );
}

function SubMenuItem(props) {
  const [activeState, setActiveState] = useState((window.location.pathname === props.item.link) ? " active" : "");

  return (
    <Link to={props.item.link} key={props.k} className={"nav_link" + activeState} >
      <i className={"sub-menu-item " + props.item.class} />
      <span className="nav_name">{props.item.name}</span>
    </Link>
  );
}