import React, { Component } from 'react';
import { adfgx } from './Ciphers/ADFGX.js';

class ADFGXPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">

      <h1>ADFGX</h1>
      Starting ADFGX: {adfgx.start("keyword","AA")}
      <h3>Keyword: {adfgx.keyword()}
      <br/>Encryption: {adfgx.encrypt("test")}
      <br/>Encryption Word: {adfgx.eWord()}
      <br/>Decryption: {adfgx.decrypt("AAFDXF")}
      <br/>Decryption Word: {adfgx.dWord()}</h3>
      </div>
    );
  }
}

export default ADFGXPAGE;
