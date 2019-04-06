import React, { Component } from 'react';
import '../Styling/App.css';
import TopbarMenu from './Body/TopbarMenu'
import SidebarMenu from './Body/SidebarMenu';

class Body extends Component {
  render() {
    return (
        <body>
          <SidebarMenu/>
          <TopbarMenu/>
        </body>
    );
  }
}

export default Body;