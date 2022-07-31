import React , {Fragment, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import StepWizard from 'react-step-wizard'
import Header from './Header/Header.js'
import Footer from './Footer/Footer';
import Main from './Main/Main.js'
const App = () => {
 

  return (
    <div className="App">
      <Header/>
      <Main/>
        <Footer/>
      

       
  
    </div>
  );
}

export default App;
