import React from "react"
import Dots from "./Particles"
import Menu from "./Menu"

const Layout = ({ children }) => {
  return (
    <>
      {/*       <Menu /> */}
      <div>
        <main>{children}</main>
        <footer className="footer">
          <p>Built with ♡ by me.</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
