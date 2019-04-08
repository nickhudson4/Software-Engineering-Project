import React, { Component } from 'react';
import './InnerBody.css';

class HomeArea extends Component {
  render() {
    return (
        <div id="homeArea_div">
           <h1 id="homeArea_h1">Cryptography Explorer</h1> 
           <h4 id="homeArea_h4">Select a cipher to get started!</h4>
        </div>
    );
  }
}

export default HomeArea;