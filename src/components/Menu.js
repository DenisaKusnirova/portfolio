import React from "react"

const Menu = ({ themeSwitcher, onWorkClick, onContactClick }) => {
  return (
    <div className="menu">
      <button className="menuButton" onClick={onWorkClick}>
        MY WORK
      </button>
      <button className="menuButton" onClick={onContactClick}>
        CONTACT
      </button>
      {themeSwitcher}
    </div>
  )
}

export default Menu
