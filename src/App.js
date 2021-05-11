import './App.css';
import React from "react";
import Videoheader from './components/videoheader/Videoheader';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Videoheader />
        <About />
      </div>
    );
  }
  
}

export default App;
