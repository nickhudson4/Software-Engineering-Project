import React, { Component } from 'react';
import { foursquare } from './Ciphers/FourSquare.js'


class FOURSQUAREPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">

      <h1>Four Square</h1>
      Starting Four Square: {foursquare.start()}
      <h3>Keyword 1: {foursquare.keyword1f()}
      <br/>Keyword 2: {foursquare.keyword2f()}
      <br/>Encryption: {foursquare.encrypt("test")}
      <br/>Decryption: {foursquare.decrypt("ahtt")}</h3>

      </div>
    );
  }
}

export default FOURSQUAREPAGE;
