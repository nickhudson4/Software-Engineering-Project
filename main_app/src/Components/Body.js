import React, { Component } from 'react';
import '../Styling/App.css';
import TopbarMenu from './Body/TopbarMenu'
import SidebarMenu from './Body/SidebarMenu';

class Body extends Component {

  constructor(){
    super();
    this.menuOnClick = this.menuOnClick.bind(this)

    this.state = {
      currentLayout: 'home',
      whichCipher: 'none'
    }
  }

  //Function called from menu onClick
  //Changes state of body from home to cipher
  //cipher being the page displayed for the cipher
  menuOnClick = (cipher) => {
    console.log(cipher);
    this.setState({
      whichCipher: cipher 
    })
  }

  render() {
    console.log('Rerendered with: ' + this.state.whichCipher);
    return (
        <body>
          <SidebarMenu onClickFunc = {this.menuOnClick}/>
          <TopbarMenu/>
        </body>
    );
  }
}

export default Body;