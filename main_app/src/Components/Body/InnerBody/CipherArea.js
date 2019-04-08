import React, { Component } from 'react';
import './InnerBody.css';
class CipherArea extends Component {
  render() {
    return (
        <div id="cipherArea_div">
          <textarea className="inputOutput_textArea" id="input_textArea" rows="25" cols="80">

          </textarea>
          <textarea className="inputOutput_textArea" id="output_textArea" rows="25" cols="80">

          </textarea>
 
        </div>
    );
  }
}

export default CipherArea;