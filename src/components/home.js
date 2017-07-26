import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageTag extends Component {

  goToEditor(cocktail){

    let base;

    switch(cocktail){
      case 'WHITE':
      base = 'White';
      break;

      case 'WHEAT':
      base = 'Whole wheat';
      break;
      
      case 'GLUTEN_FREE':
      base = 'Gluten free';
      break;
      default:
        return
    }

    this.props.history.push('/edit/' + base)
  }

  render() {
    return (
      <div className="homeBackground">
      <div className="homeOverlay">
      </div>
        <div className="homeSection" id="homeContainer">
          <div>
            <img id="homeLogo" src={require('../images/logoWhite.png')} />
          </div>

          <div>
            <img id="doLogo" src={require('../images/doLogo.png')} />
          </div>

        
            <p id="welcomeText">
            CODING CREPES<br/><br/>
            </p>

          <h4 id="selectCocktailHeader">STEP 1:  Pick a pancake:</h4>
          <div id="selectCocktail">
          
            <div onClick={this.goToEditor.bind(this, 'WHITE')}className="selectBaseButton" style={{background:'rgb(119,184,160)'}}>
              White
            </div>
            <div onClick={this.goToEditor.bind(this, 'WHEAT')}className="selectBaseButton" style={{background:'rgb(64,104,212)'}}>
              Whole wheat
            </div>
            <div onClick={this.goToEditor.bind(this, 'GLUTEN_FREE')}className="selectBaseButton" style={{background:'rgb(204,90,123)'}}>
              Gluten free
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default ImageTag;
