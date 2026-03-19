import './App.css';
import React from "react";
import Videoheader from './components/videoheader/Videoheader.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from "./components/contact/Contact.jsx"



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


