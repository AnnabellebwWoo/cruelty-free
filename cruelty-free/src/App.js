import React from 'react';
import './styles/index.css';
import './components/about'
import './components/brands'
import './components/filter'
import './components/footer'
import './components/intro'
import './components/menu'

function App() {
  return (
    <div className="App">
      <menu />
      <intro />
      <filter />
      <brands />
      <about />
      <footer />
    </div>
  );
}

export default App;
