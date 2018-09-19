import React, { Component } from 'react';
import './App.css';
import SectionCarousel from "./views/Components/Sections/SectionCarousel.jsx";
import TitleBar from './TitleBar';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleBar />
          <SectionCarousel />
          <div />
          <div />
          <SignIn />
        </header>
      </div>
    );
  }
}

export default App;
