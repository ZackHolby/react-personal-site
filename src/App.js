import './App.css';
import React from "react";
import Videoheader from './components/videoheader/Videoheader';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Videoheader />
        <About />
        <Experience />
      </div>
    );
  }
  
}

export default App;
