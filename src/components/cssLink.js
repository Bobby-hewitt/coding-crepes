import React, { Component } from 'react';

import $ from "jquery";

class CssLink extends Component {



  render() {
    return (
      <div className="tagContainer" style={{marginLeft: this.props.margin}}>
        <p className="inline htmlTag"><span className="htmlBrackets">&#60;</span>{'link'} <span className="htmlAttr">{"rel='"}</span><span className="htmlBrackets"></span></p>
        <p contentEditable={this.props.contenteditable} className={this.props.identifier + " inline htmlClassId"}>stylesheet</p>
        <p className="inline"><span className="htmlAttr">{"' type='"}</span><span className="htmlBrackets"></span></p>
        <p contentEditable={this.props.contenteditable} className={this.props.identifier + " inline htmlClassId"}>text/css</p>
        <p className="inline"><span className="htmlAttr">{"' href='"}</span><span className="htmlBrackets"></span></p>
        <p contentEditable={this.props.contenteditable} className={this.props.identifier + " inline htmlClassId"}>app.css</p>
        <p className="inline"><span className="htmlAttr">{"'"}</span><span className="htmlBrackets">&#62;</span></p>
    </div>
    );
  }
}

export default CssLink;
