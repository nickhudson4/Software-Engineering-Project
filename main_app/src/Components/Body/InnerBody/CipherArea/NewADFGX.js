import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { adfgx } from './ADFGX.js';
import { readfgx } from './reADFGX.js'

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewADFGX extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: 'german', //keyword_input
            keysquare: 'phqgmeaynofdxkrcvszwbutil',
            inputText: 'attack',
            mode: 'none'
        }
    }



    render() {
        return (
            <div id="railFence_div" className="specific_cipher_class">
                <h1>ADFGX</h1>
                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Encrypt" rows="25" cols="25"></textarea>
                    <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Decrypt" rows="25" cols="25"></textarea>
                    {/* <br/> */}
                    <div id="actions_div_id" className="actions_div">
                        <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
                        <button type="button" onClick={this.decryptOnClick}>Decrypt</button>

                        <form className="textBox_form">
                            Keyword: <input id="keyword_input" className="input_textBox" type="text" min="2" step="1" name="keyword" value={this.state.keyword} onChange={evt => this.updateKeyword(evt)}></input>
                        </form>
                        <form className="textBox_form">
                            Keysquare: <input id="keysquare_input" className="input_textBox" type="text" min="2" step="1" name="keysquare" value={this.state.keysquare} onChange={evt => this.updateKeysquare(evt)}></input>
                        </form>

                    </div>


                </div>
                <LoadMode mode = {this.state.mode} inputKeyword = {this.state.keyword} inputText = {this.state.inputText} inputKeysquare = {this.state.keysquare}/>
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
    var text = document.getElementById("input_textArea2").value;  //Inputed text
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

    updateKeysquare(evt) { //Reload when number of rails is changed
        this.setState({
          keysquare: evt.target.value
        });
    }

}

export default NewADFGX;


const Encrypt = (props) => {
 //adfgx.start(props.inputKeyword)
 //var temp = adfgx.encrypt(props.inputText)
 var temp2 = readfgx.encryption("attack", "phqgmeaynofdxkrcvszwbutil", "german");
 //var temp = props.inputText
 return (
     <OutputTextarea message={temp2} />
 );
}



const Decrypt = (props) => {
  //adfgx.start(props.inputKeyword)
  //var temp = readfgx.translate(props.inputText)
  var temp2 = readfgx.encryption("attack", "phqgmeaynofdxkrcvszwbutil", "german");
  //var temp2 = readfgx.generateMatrix("abcdefghiklmnopqrstuvwxyz" )
    return (
        <OutputTextarea message={temp2} />
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
