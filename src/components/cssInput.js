import React, { Component } from 'react';
import $ from "jquery";

class CssInput extends Component {
  
  componentDidMount(){

    var self = this;
    var contents = $('.' + this.props.identifier)
      contents.blur(function() {
        var data = contents[0].innerText
        self.props.changeCss(self.props.item, self.props.property, data)
        
      });

      $('.' + self.props.identifier).on('keydown', function(e){
        
        console.log(e)
        console.log(e.keyCode)
        if (e.keyCode === 13){
          e.preventDefault()
          $('.' + self.props.identifier).blur()
        }
      })
    }


  render() {
    return (
      <p contentEditable={true} className={"inline cssValue " + this.props.identifier}>{this.props.value}</p>
    );
  }
}

export default CssInput;
