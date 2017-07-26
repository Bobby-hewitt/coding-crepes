import React, { Component } from 'react';


class HtmlSingleTag extends Component {
  render() {
    return (
      <div className="tagContainer" style={{marginLeft: this.props.margin}}>
        <p className="inline htmlTag"><span className="htmlBrackets">&#60;</span>{this.props.tag}<span className="htmlBrackets">
{(this.props.renderId) ? <p className="inline"><span className="htmlAttr"> &#8201;&#32;id=&#39;</span><span className="htmlClassId">{ this.props.renderId}</span><span className="htmlAttr">&#39;</span></p> : null}
{(this.props.renderClass) ? <p className="inline"><span className="htmlAttr"> &#8201;&#32;class=&#39;</span><span className="htmlClassId">{ this.props.renderClass}</span><span className="htmlAttr">&#39;</span></p> : null}
        &#62; </span></p>
    </div>
    );
  }
}

export default HtmlSingleTag;
