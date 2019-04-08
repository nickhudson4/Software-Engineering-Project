import React, { Component } from 'react';
import './Body.css';
import CipherArea from './InnerBody/CipherArea';
import HomeArea from './InnerBody/HomeArea';
import AboutArea from './InnerBody/AboutArea';

class InnerBody extends Component {
  
  render() {
    console.log(this.props.whichLayout);
    if (this.props.whichLayout === 'home'){ //Home screen (No cipher input/output)
      return (
        <HomeArea/>
      );
    }
    else if (this.props.whichLayout === 'cipher'){ //Cipher input/output displayed
      return (
        <CipherArea whichCipherClicked = {this.props.whichCipherClicked}/>
      );
    }
    else if (this.props.whichLayout === 'about'){
      return (
        <AboutArea/>
      );
    }
    else { //temp just return empty div
      return (
        <div>

        </div>
      );
    }
  }
}

export default InnerBody