import React, { Component } from 'react';
import './InnerBody.css';
import Cipher from './CipherArea/Cipher';

/*
  Static components that are shared between each cipher.
  Components specific to a cipher are in <Cipher/>
*/

class CipherArea extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputText: 'none',
    }
  }
  render() {
    return (
        <div id="cipherArea_div">
          <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Input" rows="25" cols="80"></textarea>
          <textarea className="inputOutput_textArea" id="output_textArea" placeholder="Output" rows="25" cols="80"></textarea>
          <br/>
          <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
          <button type="button">Decrypt</button>

          <Cipher whichCipherClicked = {this.props.whichCipherClicked} inputText = {this.state.inputText}/>
        </div>
    );
  }

  encryptOnClick = () => {
    var text = document.getElementById("input_textArea").value;  //Inputed text
    this.setState({
      inputText: text
    })
  }
}

export default CipherArea;