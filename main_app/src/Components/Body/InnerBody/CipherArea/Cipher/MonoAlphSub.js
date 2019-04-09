import React, { Component } from 'react';
import './Cipher.css';
import Table from './Table';

/*
    Renders specific component based on cipher chosen.
    Actual cipher backend logic will come from here
*/

class MonoAlphSub extends Component {
  render() {
    return (
        <div id="monoAlphSub_div">
          <Table/>
        </div>
    );
  }
}

export default MonoAlphSub;