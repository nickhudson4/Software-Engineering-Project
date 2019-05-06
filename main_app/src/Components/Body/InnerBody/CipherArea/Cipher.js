import React, { Component } from 'react';
import './CipherArea.css';
import MonoAlphSub from './Cipher/MonoAlphSub';
import RailFence from './Cipher/RailFence';
/*
    Renders specific component based on cipher chosen
*/

class Cipher extends Component {
  render() {
    return (
        <GetCipher whichCipher = {this.props.whichCipherClicked} inputText = {this.props.inputText} mode = {this.props.mode}/>
    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {

  var mode = props.mode;

  if (props.whichCipher === 'mono'){
    return (
      <MonoAlphSub inputText = {props.inputText} mode = {mode}/>
    );
  }
  else if (props.whichCipher === 'rail'){
    return (
      <RailFence inputText = {props.inputText} mode = {mode}/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }
  
}



export default Cipher;