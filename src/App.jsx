import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import myResume from '/myresume';
import imgPath from './img';

class App extends Component {
  render() {
    return (
      <Router>     
        <header className="container-fluid bg-light" id="header">
          <Header />
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home myResume={myResume}/>} />
            <Route path="/about" element={<About myResume={myResume}/>} />
            <Route path="/resume" element={<Resume myResume={myResume}/>} />
            <Route path="/project" element={<Project myResume={myResume}/>} />
            <Route path="/contact" element={<Contact myResume={myResume}/>} />
          </Routes>     
        </div>
        <footer className="container-fluid" id="footer">     
          <Footer myResume={myResume} />
        </footer>
      </Router>
    );
  }
}

export default App;
