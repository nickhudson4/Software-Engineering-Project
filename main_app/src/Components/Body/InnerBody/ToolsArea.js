import React, { Component } from 'react';
import './InnerBody.css';
import IntegerCalc from './ToolsArea/IntegerCalc';
import TextExtractor from './ToolsArea/TextExtractor';
import TextCombiner from './ToolsArea/TextCombiner';
import TextConverter from './ToolsArea/TextConverter';
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
      );
    }
    else if (this.props.whichTool === 'text_extractor') {
      return (
        <TextExtractor whichTool = {this.props.whichTool}/>
      );
    }
    else if (this.props.whichTool === 'text_combiner') {
      return (
        <TextCombiner whichTool = {this.props.whichTool}/>
      );
    }
    else if (this.props.whichTool === 'text_converter') {
      return (
        <TextConverter whichTool = {this.props.whichTool}/>
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
