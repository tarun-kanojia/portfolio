import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { theme } from "./contants/theme";
import AboutMe from "./components/AboutMe";
import { Container, PageWrapper } from "./styleComponents";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <NavBar />
        <Container>
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </Container>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
