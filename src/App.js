import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import CertificatesSection from "./components/Certificates";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  // Get the user's theme preference from localStorage or default to true (dark theme)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });
  
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  
  // Update scrollbar colors based on theme
  useEffect(() => {
    // Set CSS variables for scrollbar colors
    document.documentElement.style.setProperty(
      '--scrollbar-track', 
      darkMode ? '#222A35' : '#f0f0f0'
    );
    
    document.documentElement.style.setProperty(
      '--scrollbar-thumb', 
      darkMode ? '#575C66' : '#c5c5c5'
    );
    
    document.documentElement.style.setProperty(
      '--scrollbar-thumb-hover', 
      darkMode ? '#626970' : '#a8a8a8'
    );
  }, [darkMode]);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <CertificatesSection />
          </Wrapper>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
