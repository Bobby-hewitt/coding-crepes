import React, { Component } from 'react';
import CssInput from './cssInput'
import $ from "jquery";

class CssDeclarator extends Component {

  constructor(props){
    super(props)
    this.state = {
      keys: [],
      positionIsAbsolute: false
    }
  }

  changeCss(item, property, value){
    var self = this
    this.props.changeCss(item, property, value)
    if (property === 'position' ){
      if (value === 'absolute'){
        this.setState({positionIsAbsolute: true})
      } else {
        this.setState({positionIsAbsolute: false})
      }
      
    } 
  }

  componentWillMount(){
    var keys = Object.keys(this.props.properties)
    this.setState({keys})
  }

  componentDidReceiveProps(nextProps){
    this.forceUpdate()
  }

  render() {

      return (
        <div>
          <p className="cssBracket"><span className="cssSelector">{this.props.declarator}</span> &#123;</p>
           
            { (this.props.comments) ? this.props.comments.map((comments, i) => {
              console.log()
                return (
                    <p key={i}className="cssProperty uneditable">{comments} </p>

                )
              
            }) : null}
            {this.state.keys.map((key, i) => {
              if (this.props.properties[key].positionDependent === false){
                return (
                  <div key={i}>
                    <p className="inline cssProperty">{this.props.properties[key].propertyName}: </p>
                    <CssInput 
                      changeCss={this.changeCss.bind(this)} 
                      identifier={this.props.item + this.props.properties[key].property + 'Input'} 
                      item={this.props.item} 
                      property={this.props.properties[key].property} 
                      value={this.props.properties[key].value}/>
                  </div>
                )
              }
            })}
          <p className="cssBracket">&#125;</p>
      </div>
      );
    
  }
}

export default CssDeclarator;
