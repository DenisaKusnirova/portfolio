import React from "react"

const Menu = ({ themeSwitcher }) => {
  return (
    <div className="menu">
      <button className="menuButton">MY WORK</button>
      <button className="menuButton">CONTACT</button>
      {themeSwitcher}
    </div>
  )
}

export default Menu
