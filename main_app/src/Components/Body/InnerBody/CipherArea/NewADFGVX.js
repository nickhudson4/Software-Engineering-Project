import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { adfgvx } from './ADFGVX.js';

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewADFGVX extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: "adfgvx", //Defualt number of rails
            inputText: 'none',
            mode: 'none'
        }
    }



    render() {

        return (
            <div id="adfgvx_div" className="specific_cipher_class">
                <h1>ADFGVX</h1>
                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Input" rows="25" cols="80"></textarea>
                    {/* <br/> */}
                    <div id="actions_div_id" className="actions_div">
                        <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
                        <button type="button" onClick={this.decryptOnClick}>Decrypt</button>

                        <form className="textBox_form">
                            Keyword: <input id="rails_input" className="input_textBox" type="text" min="2" step="1" name="num_rails" value={this.state.keyword} onChange={evt => this.updateKeyword(evt)}></input>
                        </form>
                    </div>


                </div>
                <LoadMode mode = {this.state.mode} inputKeyword = {this.state.keyword} inputText = {this.state.inputText}/>
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

    updateKeyword(evt) { //Reload when number of rails is changed
        this.setState({
          keyword: evt.target.value
        });
    }
}

export default NewADFGVX;


const Encrypt = (props) => {
 adfgvx.start(props.inputKeyword)
 var temp = adfgvx.encrypt(props.inputText)
 return (
     <OutputTextarea message={temp} />
 );
}



const Decrypt = (props) => {
  adfgvx.start(props.inputKeyword)
  var temp = adfgvx.decrypt(props.inputText)
    return (
        <OutputTextarea message={temp} />
    );
}



var copyToClipboard = (e) => {
    var textAreaToCopy = document.getElementById('output_textArea');
    textAreaToCopy.select();
    document.execCommand('copy');
    e.target.focus();
};

const LoadMode = (props) => {
    var mode = props.mode;
    var inputKeyword = props.inputKeyword;
    var inputText = props.inputText;

    if (mode === 'encrypt'){
        return (
            <Encrypt inputKeyword = {inputKeyword} inputText = {inputText}/>
        );
    }
    else if (mode === 'decrypt'){
        return (
            <Decrypt inputKeyword = {inputKeyword} inputText = {inputText}/>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

/* Renders the text area with encrypted/decrypted string  */
const OutputTextarea = (props) => {
    return (
        <div id="output_textArea_div" className="output_text_area">
            <textarea className="inputOutput_textArea" id="output_textArea" value={props.message} placeholder="Output" rows="25" cols="80" onChange={() => {}}></textarea>
            <button onClick={copyToClipboard}>Copy <br/> Output</button>
        </div>
    );
}
