import React, { Component } from 'react';
import '../Styling/App.css';
import Header from './Header';
import Footer from './Footer'
import Body from './Body'

/* 
  Main render that renders the other components.
  Imports App.css for styling
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header_div">
          <Header />
        </div>
        <div>
          <Body id="body_div"/>
        </div>
      </div>
    );
  }

 
}

    

export default App;
