import React, { Component } from 'react';

class Comment extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      openTag: '',
      closeTag: ''
    }
  }

  componentWillMount(){
    if (this.props.lang === 'css'){
      this.setState({openTag: '/*', closeTag: '*/'})
    } else {
      this.setState({openTag: '<!--', closeTag: '-->'})
    }
  }

  render() {
    return (
      <p className="comment" style={{marginLeft: this.props.margin}}>{this.state.openTag} <br/> {this.props.comment} <br/> {this.state.closeTag}</p>
    );
  }
}

export default Comment;

