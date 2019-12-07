import React, { Component } from 'react';
import './CipherArea.css';
import Table from './Table';
import { affine } from './Affine.js'

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here


    thisisatestinput encrypted with 3 rails:

t      i     e       n
  h  s  s  t   s   i   p   t  => tienhsstsiptiatu
   i     a       t       u

*/

class NewAffine extends Component {
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
                <h1>Affine</h1>

                <div id="input_textArea_div" className="input_text_area">
                    <textarea className="inputOutput_textArea" id="input_textArea" placeholder="Encrypt" rows="5" cols="15"></textarea>
                    <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Decrypt" rows="5" cols="15"></textarea><br/>
                    <div className="selections_div">
                    <h2 h1 style={{ color: 'white' }}>Form: c = a(x)+b</h2>
                    <h4 h1 style={{ color: 'white' }}>Letter a</h4>
                      <select id="calculation_select1" name="Calculations" form="CalcForm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                      </select>
                    </div>
                    <div className="selections_div">
                    <h4 h1 style={{ color: 'white' }}>Letter b</h4>
                      <select id="calculation_select2" name="Calculations" form="CalcForm">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                      </select>
                    </div>
                    {/* <br/> */}
                    <div id="actions_div_id" className="actions_div">
                        <button type="button" onClick={this.encryptOnClick}>Encrypt</button>
                        {/*<button type="button" onClick={this.decryptOnClick}>Decrypt</button>*/}
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
}

export default NewAffine;


const Encrypt = (props) => {
 //mono.start(props.inputKeyword)
 //var temp = mono.encrypt(props.inputText)
 var e = document.getElementById("calculation_select1");
 var selection1 = e.options[e.selectedIndex].value;
 var f = document.getElementById("calculation_select2");
 var selection2 = f.options[f.selectedIndex].value;
 //var cipherAlphabet = document.getElementById("keysquare_area").value;
 var encryptionWord = document.getElementById("input_textArea").value;
 var temp = affine.encrypt("abcdefghijklmnopqrstuvwxyz", "test", selection1, selection2);
 var output1 = temp.toString();
 output1 = output1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
 //var temp = props.inputText
 return (
     <OutputTextarea message={temp} />
 );
}




const Decrypt = (props) => {
  //mono.start(props.inputKeyword)
  //var temp = mono.encrypt(props.inputText)
  var e = document.getElementById("calculation_select1");
  var selection1 = e.options[e.selectedIndex].value;
  var f = document.getElementById("calculation_select2");
  var selection2 = f.options[f.selectedIndex].value;
  //var cipherAlphabet = document.getElementById("keysquare_area").value;
  var encryptionWord = document.getElementById("input_textArea").value;
  var temp = affine.decrypt("abcdefghijklmnopqrstuvwxyz", "uftu", selection1, selection2);
  var output2 = temp.toString();
  output2 = output2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //var temp = props.inputText
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
    var inputKeyword = props.keyword;
    var inputKeysquare = props.keysquare;
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
            <br/><button onClick={copyToClipboard}>Copy <br/> Output</button>
        </div>
    );
}
