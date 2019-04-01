import React, { Component } from 'react';
import '../Styling/App.css';

/* 
  Main render that renders the other components.
  Imports App.css for styling
*/

class Header extends Component {
  render() {
    return (
        <header>
            <h1>Website Title</h1>
            <h2>Subtitle</h2>
        </header>
    );
  }
}

export default Header;