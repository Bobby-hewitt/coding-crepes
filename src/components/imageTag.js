import React, { Component } from 'react';

import $ from "jquery";

class ImageTag extends Component {

  componentDidMount(){
    var self = this;
var contents = $('.' + this.props.identifier)
    $('.' + this.props.identifier).blur(function() {
 console.log(self.props.identifier)
var data = contents[0].innerText
console.log(data)
self.props.updateState(self.props.item, data, self.props.index)
           

    });
}

  render() {
    return (
      <div className="tagContainer" style={{marginLeft: this.props.margin}}>
        <p className="inline htmlTag"><span className="htmlBrackets">&#60;</span>{'img'} <span className="htmlAttr">{"src='"}</span><span className="htmlBrackets"></span></p>
        <p contentEditable={this.props.contenteditable} className={this.props.identifier + " inline htmlClassId"}> {this.props.content } </p>
        <p className="inline"><span className="htmlAttr"> &#39;&#8201;&#32;id=&#39;</span><span className="htmlClassId">image</span><span className="htmlAttr">&#39;</span></p>
<p className="inline"><span className="htmlAttr"> &#8201;&#32;class=&#39;</span><span className="htmlClassId">contentBlock</span><span className="htmlAttr">&#39;</span></p>
    <p className="inline htmlTag">{'/>'}</p>
    </div>
    );
  }
}

export default ImageTag;
