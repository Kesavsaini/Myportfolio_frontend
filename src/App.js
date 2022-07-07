import React from 'react'
import Home from './Pages.jsx/Home'
import "./App.css"
import { ThemeProvider } from 'styled-components'
import { darkTheme,LightTheme } from './utils/Theme'

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Home/>
    </ThemeProvider>
  )
}

export default App