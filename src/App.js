import './App.css';
import React from "react";
import Videoheader from './components/videoheader/Videoheader';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from "./components/contact/Contact"



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Videoheader />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    );
  }
  
}

export default App;
