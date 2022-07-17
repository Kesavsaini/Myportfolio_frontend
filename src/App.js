import React from 'react'
import Home from './Pages.jsx/Home'
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import { ThemeProvider } from 'styled-components'
import { darkTheme,LightTheme } from './utils/Theme'
import AboutmePage from './Pages.jsx/AboutmePage';
import BlogsPage from './Pages.jsx/BlogsPage';
import ContactmePage from './Pages.jsx/ContactmePage';
import ProjectsPage from './Pages.jsx/ProjectsPage';
import ServicesPage from './Pages.jsx/ServicesPage';
import SkillsPage from './Pages.jsx/SkillsPage';
import Blog from './Pages.jsx/Blog';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutme" element={<AboutmePage/>} />
      <Route path="/blogs" element={<BlogsPage/>} />
      <Route path="/contactme" element={<ContactmePage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/services" element={<ServicesPage/>} />
      <Route path="/skills" element={<SkillsPage/>} />
      <Route path="/blog/:id" element={<Blog/>} />
    </Routes>
  </BrowserRouter>
    </ThemeProvider>
  )
}

export default App