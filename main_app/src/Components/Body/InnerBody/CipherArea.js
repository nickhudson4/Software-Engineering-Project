import React, { Component } from 'react';
import './InnerBody.css';
import Cipher from './CipherArea/Cipher';

/*
  Static components that are shared between each cipher.
  Components specific to a cipher are in <Cipher/>.
  Mainly used for creating input/output text areas
  and getting original input
*/

class CipherArea extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputText: '',
      mode: ''
    }
  }
  render() {
    return (
        <div id="cipherArea_div">
          <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Input" rows="25" cols="80"></textarea>
          <br/>
          <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
          <button type="button" onClick={this.decryptOnClick}>Decrypt</button>


          <Cipher whichCipherClicked = {this.props.whichCipherClicked} inputText = {this.state.inputText} mode = {this.state.mode}/>
        </div>
    );
  }

  encryptOnClick = () => {
    var text = document.getElementById("input_textArea").value;  //Inputed text
    this.setState({
      inputText: text,
      mode: 'encrypt'
    })
  }
  decryptOnClick = () => {
    var text = document.getElementById("input_textArea").value;  //Inputed text
    this.setState({
      inputText: text,
      mode: 'decrypt'
    })
  }
}

export default CipherArea;