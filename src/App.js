import React, { Fragment } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
