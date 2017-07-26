import React, { Component } from 'react';

import $ from "jquery";

class EnterOrderNumber extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  submitOrder(){
    var orderNumber = $('#orderNumberInput')
    this.props.submitOrder(orderNumber[0].value)
  }


  render() {
    return(
      <div id="orderNumberContainer">
          <input className="inline" type="text"placeholder="Enter order number" id="orderNumberInput"/>
          <input id="orderNumberSubmit"type="submit" value="go" onClick={this.submitOrder.bind(this)}/>
      </div>
    )

  }
}


export default EnterOrderNumber;
