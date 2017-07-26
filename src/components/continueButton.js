import React, { Component } from 'react';
import $ from "jquery";
class ContinueButton extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      openTag: '',
      closeTag: ''
    }
  }

  action(){

    if (this.props.action === 'toCss'){
          console.log(this.props)
     $('#htmlTab').removeClass('activeTab').addClass('inactiveTab')
      $('#cssTab').removeClass('inactiveTab').addClass('activeTab')
      $('#cssContainer').css({'display':'block'})
      $('#htmlContainer').css({'display':'none'})
      console.log($('#cssContainer').scrollTop())

    }
      
  }



  render() {
    return (
      <h3 onClick={this.action.bind(this)} className="continueButton">DONE</h3>
    );
  }
}

export default ContinueButton;

