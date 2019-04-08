import React, { Component } from 'react';
import './CipherArea.css';
import MonoAlphSub from './Cipher/MonoAlphSub';
/*
    Renders specific component based on cipher chosen
*/

class Cipher extends Component {
  render() {
    return (
        <MonoAlphSub inputText = {this.props.inputText}/>
    );
  }
}

export default Cipher;