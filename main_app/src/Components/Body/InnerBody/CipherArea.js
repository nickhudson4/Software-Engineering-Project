import React, { Component } from 'react';
import './InnerBody.css';
import MonoAlphSub from './CipherArea/MonoAlphSub';
import RailFence from './CipherArea/RailFence';
/*
    Renders specific component based on cipher chosen
*/

class CipherArea extends Component {
  render() {
    return (
        <GetCipher whichCipher = {this.props.whichCipherClicked}/>
    );
  }
}

//Renders which cipher the user clicked
const GetCipher = (props) => {

  if (props.whichCipher === 'mono'){
    return (
      <MonoAlphSub/>
    );
  }
  else if (props.whichCipher === 'rail'){
    return (
      <RailFence/>
    );
  }
  else { //Error return empty div
    return (
      <div></div>
    );
  }
  
}

export default CipherArea;