import React, { Component } from 'react';
import './InnerBody.css';
import IntegerCalc from './ToolsArea/IntegerCalc';
class ToolsArea extends Component {
  constructor(){
    super();
    this.state = {
      whichTool: 'none',
    }
  }
  render() {
    if (this.props.whichTool === 'int_calc') {
      return (
        <IntegerCalc whichTool = {this.props.whichTool}/>
        // <div></div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default ToolsArea;
