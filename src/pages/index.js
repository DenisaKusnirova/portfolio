import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Work from "../components/Work"
import Menu from "../components/Menu"
import Contact from "../components/Contact"
import Dots from "../components/Particles"
import ThemeContext from "../context/ThemeContext"
import "../styles/styles.scss"

const IndexPage = () => {
  const theme = React.useContext(ThemeContext)

  const renderThemeSwitcher = theme => (
    <button className="themeSwitcher" onClick={theme.toggleDark}>
      {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
    </button>
  )
  return (
    <Layout>
      <Menu themeSwitcher={renderThemeSwitcher(theme)} />
      <Dots />
      <About />
      <Work />
      <Contact />
    </Layout>
  )
}

export default IndexPage
