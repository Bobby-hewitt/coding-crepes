import React, { Component } from 'react';

import $ from "jquery";

const placeholders = ['Type Ingredient', 'Type Method']

class HtmlTag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true,
      contents: null
    }


  }

  componentDidMount(){


    var self = this;
    var contents = $('.' + this.props.identifier)

 let initialContent = self.props.content.replace(/\s+/g, '');
        console.log(initialContent)

        
        if(initialContent === 'Typeingredient' || initialContent === 'Typemethod')  {
          console.log('true')
          self.setState({ placeholder: true })
        } else {
          console.log('false')
          self.setState({ placeholder: false })
        }

    $('.' + this.props.identifier).blur(function() {
       console.log(self.props.identifier)
      var data = contents[0].innerText
      console.log(data)
      self.props.updateState(self.props.item, data, self.props.index)
    });

    $('.' + self.props.identifier + 'removeItem').click(function(){
      self.props.removeItem(self.props.item, self.props.index)
    })

    $('.' + self.props.identifier).on('keyup', function(e){
        
        let content = contents[0].innerText;
            content = content.replace(/\s+/g, '');
        let initialContent = self.props.content.replace(/\s+/g, '');
        console.log(initialContent)

        
        if(content === 'Typeingredient' || content === 'Typemethod')  {
          console.log('true')
          self.setState({ placeholder: true })
        } else {
          console.log('false')
          self.setState({ placeholder: false})
        }
        console.log(e.keyCode)
        if (e.keyCode === 13){
          e.preventDefault()
          $('.' + self.props.identifier).blur()
        }
      })

}

  render() {

    return (
      <div className="tagContainer" style={{marginLeft: this.props.margin}}>
        <p className="inline htmlTag"><span className="htmlBrackets">&#60;</span>{this.props.tag}<span className="htmlBrackets">
{(this.props.renderId) ? <p className="inline"><span className="htmlAttr"> &#8201;&#32;id=&#39;</span><span className="htmlClassId">{ this.props.renderId}</span><span className="htmlAttr">&#39;</span></p> : null}
{(this.props.renderClass) ? <p className="inline"><span className="htmlAttr"> &#8201;&#32;class=&#39;</span><span className="htmlClassId">{ this.props.renderClass}</span><span className="htmlAttr">&#39;</span></p> : null}
        &#62; </span></p>

        <p contentEditable={this.props.contenteditable} className={this.props.identifier + " inline editableContent "+(this.state.placeholder ? 'placeholder' : '')}> {" " + this.props.content + " "} </p>
        <p className="inline htmlTag"><span className="htmlBrackets">&#60;</span>/{this.props.tag}<span className="htmlBrackets">&#62; </span></p>
          {(this.props.showRemoveButton === true) ? <button className={"inline button removeButton " + this.props.identifier + "removeItem"}>x</button> : null}
    </div>
    );
  }
}

export default HtmlTag;
