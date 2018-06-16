import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import haha from './Chilis.mp4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
     {/*     <img src={logo} className="App-logo" alt="logo" />  */}
      {/*    <h1 className="App-title">Welcome to React</h1>   */}
	  <video autoPlay preload="auto" className="funnyy" ref="vidd" id="funny" width="1280" height="720" controls>
		<source src={haha} type ='video/mp4' id="work"  />
	</video>
		<p className="dummy"> You are a dummy </p>
        </header>
        <p className="App-intro">
          HAHA
        </p>
      </div>
    );
  }
}
export default App;
