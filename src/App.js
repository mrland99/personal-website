import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'


import Main from './components/Main';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
