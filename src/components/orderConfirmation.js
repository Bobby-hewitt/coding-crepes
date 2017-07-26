import React, { Component } from 'react';


import $ from "jquery";

class OrderConfirmation extends Component {

  constructor(props){
    super(props)
    this.state = {
      orderUrl:''
    }
  }

  componentWillMount(){
    this.setState({orderUrl: 'www.codingcrepes.com/order/' + this.props.match.params.id })
  }


  render() {
    return (
      <div className="homeBackground">
      <div className="homeOverlay">
        <div className="orderConfirmationContainer">
        <h1 className="orderUrl">Your order is waiting for you at</h1>
        <h1 className="orderUrl"> {this.state.orderUrl} </h1>
        <img src={require('../images/logo.png')} className="logoRelative" />
      </div>
        </div>
        </div>
    );
  }
}

export default OrderConfirmation;
