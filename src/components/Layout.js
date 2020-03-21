import React from "react"
import Menu from "./Menu"

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
         <p>Built with ♡ by me.</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
