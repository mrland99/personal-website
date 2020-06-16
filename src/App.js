import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'


import Main from './components/Main';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
