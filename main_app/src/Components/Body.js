import React, { Component } from 'react';
import '../Styling/App.css';
import Menu from './Body/Menu';

class Body extends Component {
  render() {
    return (
        <body>
          <Menu />
        </body>
    );
  }
}

export default Body;