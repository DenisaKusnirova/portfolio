import React from "react"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}
const ThemeContext = React.createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }
