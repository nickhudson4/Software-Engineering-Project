import React, { Component } from 'react';
import { vigenere } from './Ciphers/Vigenere.js'


class VIGENEREPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">

      <h1>Vigenere</h1>
      Starting Vigenere: {vigenere.start()}
      <h3>Encryption: {vigenere.encrypt("test")}
      <br/>Encryption Word: {vigenere.eWord()}</h3>

      </div>
    );
  }
}

export default VIGENEREPAGE;
