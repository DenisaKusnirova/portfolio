import React from "react"
import Dots from "./Particles"
import Menu from "./Menu"
import ThemeContext from "../context/ThemeContext"

const Layout = ({ children }) => {
  const theme = React.useContext(ThemeContext)

  const renderThemeSwitcher = theme => (
    <button className="themeSwitcher" onClick={theme.toggleDark}>
      {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
    </button>
  )

  return (
    <div className={theme.dark ? "dark" : "light"}>
      <Dots />
      <main>{children}</main>
      <footer className="footer">
        <p>Built with ♡ by me.</p>
      </footer>
    </div>
  )
}

export default Layout
