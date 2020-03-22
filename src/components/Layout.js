import React from "react"
import Dots from "./Particles"
import Menu from "./Menu"
import { StaticQuery, graphql } from "gatsby"
import ThemeContext from "../context/ThemeContext"

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <button className="themeSwitcher" onClick={theme.toggleDark}>
            {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
          </button>
          {/*       <Menu /> */}
          <div>
            <main>{children}</main>
            <footer className="footer">
              <p>Built with ♡ by me.</p>
            </footer>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout
