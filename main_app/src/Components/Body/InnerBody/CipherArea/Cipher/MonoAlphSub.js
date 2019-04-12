import React, { Component } from 'react';
import './Cipher.css';
import Table from './Table';

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here
*/

class MonoAlphSub extends Component {
  render() {
    var inputText = this.props.inputText;

    var tableHeadings1 = ["Plaintext", "Ciphertext"];
    var tableHeadings2 = ["Input", "Output"];

    return (
        <div id="monoAlphSub_div">
          <Table numRows = {27} numCol = {2} tableHeadings = {tableHeadings1}/>
        </div>
    );
  }
}

export default MonoAlphSub;