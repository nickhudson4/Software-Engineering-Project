import React, { Component } from 'react';
import './ToolsArea.css';
import { convert } from './Converter.js'

class TextConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOutput: false,
      output: 'none',
    }
  }
  render() {
    return (
      <div className="tools_parent_div">
        <div className="input_text_area" id="input_textArea_div">
          <textarea className="inputOutput_textArea" id="input_textArea1" placeholder="Input Text" rows="15" cols="40"></textarea>
        </div>
        <div className="selections_div">
          <button type="button" onClick={this.calculateOnClick}>Convert</button>
          <select id="calculation_select" name="Calculations" form="CalcForm">
            <option value="1">Convert to Uppercase</option>
            <option value="2">Convert to Lowercase</option>
            <option value="3">Remove Whitespace</option>
            <option value="4">Remove Punctuation</option>
            <option value="5">Remove Numbers</option>
            <option value="6">Remove Double Characters</option>
            <option value="7">Convert Spaces to Line Breaks</option>
            <option value="8">Change J to I</option>
          </select>
        </div>
        {this.state.showOutput ?
          <OutputTextarea message={this.state.output}/> :
           null
        }
        <div className="input_text_area" id="input_textArea_div">

        </div>
      </div>
    );
  }

  calculateOnClick = () => {
    // console.log(props.whichTool);
    var e = document.getElementById("calculation_select");
    var selection = e.options[e.selectedIndex].value;
    var input1 = document.getElementById("input_textArea1").value;  //Inputed text
    var value;

    if (selection === '1'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.toUpperCase();
      }

    }
    else if (selection === '2'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.toLowerCase();
      }
    }
    else if (selection === '3'){
      if (!input1){
        value = "No Input";
      }
      else {
          value = input1.split(" ");
      }
    }
    else if (selection === '4'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      }
    }
    else if (selection === '5'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.replace(/\d+/g, '')
      }
    }
    else if (selection === '6'){
      if (!input1){
        value = "No Input";
      }
    }
    else if (selection === '7'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.replace(" ", "_");
      }
    }
    else if (selection === '8'){
      if (!input1){
        value = "No Input";
      }
      else {
        value = input1.replace("j", "i");
      }
    }

    if (!value){
      value = "No Input";
    }

    this.setState({
      showOutput: true,
      output: value,
    });

  }

}
export default TextConverter;

const OutputTextarea = (props) => {
  console.log("HRE");
  return (
    <div id="output_textArea_div" className="output_text_area">
      <textarea className="inputOutput_textArea" id="output_textArea" value={props.message} placeholder="Output" rows="15" cols="80" onChange={() => { }}></textarea>
    </div>
  );
}
