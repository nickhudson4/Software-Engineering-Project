import React, { Component } from 'react';
import { adfgvx } from './Ciphers/ADFGVX.js';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.testVariable = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + adfgvx.start(this.state.value,"AA"));
    //event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Word:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




class ADFGVXPAGE extends Component {
  render(){
    return(
      <div className="container-fluid">
        <NameForm />
        <br/>ADFGVX


      </div>
    );
  }
}

export default ADFGVXPAGE;
