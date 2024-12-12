import React from 'react';
import './styles/styles.css';
import About from './components/About';
import Brands from './components/Brands';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Intro />
      <Filter />
      <Brands />
      <About />
      <Footer />
    </div>
  );
}

export default App;
