import React, { Component } from 'react';
import { twosquare } from './Ciphers/TwoSquare.js'


class TWOSQUAREPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">

      <h1>Two Square</h1>
      Starting Two Square: {twosquare.start()}
      <h3>Encryption/Decryption: {twosquare.encrypt("dlywumwg")}
      <br/>Keyword 1: {twosquare.keyword1f()}
      <br/>Keyword 2: {twosquare.keyword2f()}
      <br/>Encryption/Decryption word: {twosquare.eWord()}</h3>

      </div>
    );
  }
}

export default TWOSQUAREPAGE;
