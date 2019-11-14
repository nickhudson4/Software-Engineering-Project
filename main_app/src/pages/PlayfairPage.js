import React, { Component } from 'react';
import { playfair } from './Ciphers/Playfair.js';

class PLAYFAIRPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">

      <h1>Playfair</h1>
      Starting Playfair: {playfair.start()}
      <h3>Encryped Word: {playfair.encrypt("keywckub")}
      <br/>Encryption Word: {playfair.eWord()}</h3>

      </div>
    );
  }
}

export default PLAYFAIRPAGE;
