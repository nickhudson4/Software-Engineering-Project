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
        <div>
          <GetCipher whichCipher = {this.props.whichCipherClicked} inputText = {this.props.inputText}/>
        </div>
    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {
  if (props.whichCipher === 'mono'){
    return (
      <MonoAlphSub inputText = {props.inputText}/>
    );
  }
  else if (props.whichCipher === 'rail'){
    return (
      <RailFence inputText = {props.inputText}/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }
  
}



export default Cipher;