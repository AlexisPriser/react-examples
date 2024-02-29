//import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import React, { useState } from 'react';
import Donjon from './components/donjon';
import TestPar from './components/TestPar';

function App() {
  return (
    <div className="App">
      {/*<Donjon/>*/}
      <TestPar/>
    </div>
  );
}

export default App;


/*
import React from 'react';

function funct() {
  //...
  //return()
}

const MyComponent = () =>{
  let js_text="js text"
  return(
    <div>
      my div {js_text}
      {(() => {
        let _html = (
          <div>div
            <a>a</a>
          </div>
        )
        return _html;
      })()}
    </div>
  )
}

export default MyComponent*/