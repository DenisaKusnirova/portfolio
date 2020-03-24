import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/Layout"
import About from "../components/About"
import Work from "../components/Work"
import Menu from "../components/Menu"
import Contact from "../components/Contact"
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
      <Menu
        themeSwitcher={renderThemeSwitcher(theme)}
        onWorkClick={() => scrollTo("#workComponent")}
        onContactClick={() => scrollTo("#contactComponent")}
      />
      <About />
      <Work workComponentId="workComponent" />
      <Contact contactComponentId="contactComponent" />
    </Layout>
  )
}

export default IndexPage
