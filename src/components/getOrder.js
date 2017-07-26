import React, { Component } from 'react';
import CssInput from './cssInput'
import $ from "jquery";
import OrderRender from './orderRender'

class GetOrder extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentWillMount(){
    console.log(this.props.match.params.id)
  }

  submitOrder(orderNumber){
    console.log(orderNumber)
  }


  render() {
    return(
      <div>
          
          <OrderRender orderId={this.props.match.params.id} FirebaseApp={this.props.FirebaseApp}/>
         </div>
    )

  }
}


export default GetOrder;
