import React, { Component } from 'react';
import './ToolsArea.css';

class IntegerCalc extends Component {
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
          <textarea className="inputOutput_textArea" id="input_textArea1" placeholder="Input" rows="15" cols="40"></textarea>
          <textarea className="inputOutput_textArea" id="input_textArea2" placeholder="Input" rows="15" cols="40"></textarea>
          <textarea className="inputOutput_textArea" id="input_textArea3" placeholder="Input" rows="15" cols="40"></textarea>
        </div>
        <div className="selections_div">
          <button type="button" onClick={this.calculateOnClick}>Calculate</button>
          <select id="calculation_select" name="Calculations" form="CalcForm">
            <option value="1">#1 + #2</option>
            <option value="2">#1 - #2</option>
            <option value="3">#1 * #2</option>
            <option value="4">#1 / #2</option>
            <option value="5">#1 ^ #2</option>
            <option value="6">#1 + #2 mod(#3)</option>
            <option value="7">#1 - #2 mod(#3)</option>
            <option value="8">#1 * #2 mod(#3)</option>
            <option value="9">#1 / #2 mod(#3)</option>
            <option value="10">#1 ^ #2 mod(#3)</option>
            <option value="11">#1!</option>
            <option value="12">#2!</option>
            <option value="13">#3!</option>
            <option value="14">sqrt(#1)</option>
            <option value="15">sqrt(#2)</option>
            <option value="16">sqrt(#3)</option>
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
    var input1 = parseFloat(document.getElementById("input_textArea1").value);  //Inputed text
    var input2 = parseFloat(document.getElementById("input_textArea2").value);  //Inputed text
    var input3 = parseFloat(document.getElementById("input_textArea3").value);  //Inputed text
    var value;

    if (selection === '1'){
      if (!input1 || !input2){
        value = 0;
      }
      else {
        value = input1 + input2;
      }

    }
    else if (selection === '2'){
      if (!input1 || !input2){
        value = 0;
      }
      else {
        value = input1 - input2;
      }
    }
    else if (selection === '3'){
      if (!input1 || !input2){
        value = 0;
      }
      else {
        value = input1 * input2;
      }
    }
    else if (selection === '4'){
      if (!input1 || !input2){
        value = 0;
      }
      else {
        value = input1 / input2;
      }
    }
    else if (selection === '5'){
      if (!input1 || !input2){
        value = 0;
      }
      else {
        value = Math.pow(input1, input2);
      }
    }
    else if (selection === '6'){
      if (!input1 || !input2 || !input3){
        value = 0;
      }
      else {
        value = input1 + (input2 % input3);
      }
    }
    else if (selection === '7'){

      if (!input1 || !input2 || !input3){
        value = 0;
      }
      else {
        value = input1 - (input2 % input3);
      }
    }
    else if (selection === '8'){

      if (!input1 || !input2 || !input3){
        value = 0;
      }
      else {
        value = input1 * (input2 % input3);
      }
    }
    else if (selection === '9'){

      if (!input1 || !input2 || !input3){
        value = 0;
      }
      else {
        value = input1 / (input2 % input3);
      }
    }
    else if (selection === '10'){

      if (!input1 || !input2 || !input3){
        value = 0;
      }
      else {
        value = Math.pow(input1, input2 % input3);
      }
    }
    else if (selection === '11'){

      if (!input1){
        value = 0;
      }
      else {
        value = fact(input1);
      }
    }
    else if (selection === '12'){

      if (!input2){
        value = 0;
      }
      else {
        value = fact(input2);
      }
    }
    else if (selection === '13'){

      if (!input3){
        value = 0;
      }
      else {
        value = fact(input3);
      }
    }
    else if (selection === '14'){
      if (!input1){
        value = 0;
      }
      else {
        value = Math.sqrt(input1);
      }
    }
    else if (selection === '15'){
      if (!input2){
        value = 0;
      }
      else {
        value = Math.sqrt(input2);
      }
    }
    else if (selection === '16'){
      if (!input3){
        value = 0;
      }
      else {
        value = Math.sqrt(input3);
      }
    }

    if (!value){
      value = 0;
    }

    this.setState({
      showOutput: true,
      output: value,
    });

  }



}
export default IntegerCalc;

function fact(num) {
  if (num === 0){ 
    return 1; 
  }
  else { 
    return num * fact( num - 1 ); 
  }
}

const OutputTextarea = (props) => {
  console.log("HRE");
  return (
    <div id="output_textArea_div" className="output_text_area">
      <textarea className="inputOutput_textArea" id="output_textArea" value={props.message} placeholder="Output" rows="25" cols="80" onChange={() => { }}></textarea>
    </div>
  );
}

// const GetSymbols
