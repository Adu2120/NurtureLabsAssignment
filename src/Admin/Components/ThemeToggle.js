import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './toggle.css'

export default function ThemeToggle(props) {

    const [toggleTheme, setToggleTheme] = useState(true)
    console.log(toggleTheme)

    useEffect(() => {
      const navbar = document.getElementById("nav-bar");
      const mainb = document.getElementById("mainb");
      if(toggleTheme){
        navbar.classList.add("dark")
        mainb.classList.add("dark")
      }else{
        navbar.classList.remove("dark")
        mainb.classList.remove("dark")
      }
    //   console.log(navbar)
    }, [toggleTheme])
    

    const onToggleTheme = (e) => {
        if(e.target.value === "true"){
            setToggleTheme(false)
        }else{
            setToggleTheme(true)
        }
    }
    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
                value={toggleTheme}
                onClick={onToggleTheme}
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    )
}