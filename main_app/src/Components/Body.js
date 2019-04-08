import React, { Component } from 'react';
import './App.css';
import TopbarMenu from './Body/TopbarMenu'
import SidebarMenu from './Body/SidebarMenu';
import InnerBody from './Body/InnerBody';

class Body extends Component {

  constructor(){
    super();
    this.sideBarOnClick = this.sideBarOnClick.bind(this)
    this.topBarOnClick = this.topBarOnClick.bind(this)

    this.state = {
      currentLayout: 'home',
      whichCipher: 'none'
    }
  }

  //Function called from "SideMenuBar.js" button onClick
  //Changes state of body from home to cipher
  //cipher being the page displayed for the cipher
  //Home being the opening page
  sideBarOnClick = (whichButton) => { //Use arrow functions to use "this."
    this.setState({
      whichCipher: whichButton,
      currentLayout: 'cipher'
    })
  }

  topBarOnClick = (layout) => {
    this.setState({
      whichCipher: 'none',
      currentLayout: layout
    })
  }

  render() {
    return (
        <body>
          <SidebarMenu onClickFunc = {this.sideBarOnClick}/>
          <TopbarMenu onClickFunc = {this.topBarOnClick}/>
          <InnerBody whichLayout = {this.state.currentLayout} whichCipherClicked = {this.state.whichCipher}/>        
        </body>
    );
  }
}

export default Body;