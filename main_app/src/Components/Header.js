import React, { Component } from 'react';
import './App.css';

/* 
  Main render that renders the other components.
  Imports App.css for styling
*/

class Header extends Component {
  render() {
    return (
        <header>
            <h1 id="title_id">Website Title</h1>
            <h3 id="subtitle_id">Subtitle</h3>
        </header>
    );
  }
}

export default Header;