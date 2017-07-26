import React, { Component } from 'react';


import $ from "jquery";

class LoadingScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  

  render() {
    return (
      <div id="loadingScreen" style={{width:'100%', height: '100%', position:'fixed', top:0, left:0, background: 'rgb(20,20,20)'}}>
        <div id="loadingContainer">
          <h3 className="loadingText">Loading your order</h3>
          <img src={require('../images/logo.png')} id="spinner"/>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
