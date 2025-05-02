import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Navbarr from './Pages/Navbarr';
import Footer from './Pages/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbarr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
