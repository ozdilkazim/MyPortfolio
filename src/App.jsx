import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

export default function App() {
    return (
      <Router>     
        <header className="container-fluid bg-light" id="header">
          <Header />
        </header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <footer className="container-fluid" id="footer">     
          <Footer/>
        </footer>
      </Router>
    );
  }
