import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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
