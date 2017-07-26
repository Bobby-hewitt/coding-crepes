import React, { Component } from 'react';
import LoadingScreen from './loadingScreen'

import $ from "jquery";

class OrderRender extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: null,
      ingredients: [],
      methods: [],
      title: '',
      copyight: '',
      loading: true
    }
  }

  componentWillMount(){
    var self = this;
    this.props.FirebaseApp.database().ref('/' + this.props.orderId).once('value').then((database) => {

      var data = database.val()
    
        self.setState({image: data.image, ingredients: data.ingredients, methods: data.methods, title: data.title, copyright: data.copyright}, () => {
          console.log(this.state.title)
          var topKeys = Object.keys(data.css)
    
          for (var i = 0; i < topKeys.length; i++){
            var attrKeys = Object.keys(data.css[topKeys[i]])
            for (var j = 0; j < attrKeys.length; j++){
              var value = data.css[topKeys[i]][attrKeys[j]].value
              value = value.replace(";", "");
              var property = data.css[topKeys[i]][attrKeys[j]].property
              
              if (value.length > 0){
                var element = '.render' + topKeys[i]
            
                if (property === 'fontSize'){
                  value = (parseInt(value) /4) * 5
          
                }
                console.log(element, property, value)
                $(element).css({[property]: value})
                
              }
            }
            if (i === topKeys.length -1 ){
              var timeout = setTimeout(() => {
                $('#loadingScreen').animate({'opacity': '0'})
                var timeout2 = setTimeout(() => {
                  self.setState({loading: false}); clearTimeout(timeout)
                },500)
                
              },1000)
            }
          }

        })

    }).catch((err) => {
      console.log(err)
      })




  }

  render() {

    return (
      <div className=" rendercontainer">
            <div className="renderheaderContainer renderheaderContainer">
              <h1 id="getOrderTitle" className="renderheaderContent">Coding Crepes</h1>
            </div>
            <div style={{padding:'5%'}}>
                  <h1 className="rendertitle rendercontainers">{this.state.title}</h1>
                  <img className="renderimage rendercontainers" src={this.state.image} />

                  <div className="renderingredients rendercontainers">
                    <h3 className="rendersectionHeader">Ingredients</h3>
                    <ul>
                      {this.state.ingredients.map((ingredient, i) => {
                        return(
                          <li className="renderingredient renderlistItem" key={i}>{ingredient}</li>
                        )
                      })}
                    </ul>
                  </div>


                <div className="rendermethods rendercontainers">
                <h3 className="rendersectionHeader">Method</h3>
                  <ul>
                    {this.state.methods.map((method, i) => {
                      return(
                        <li className="rendermethod renderlistItem" key={i}>{method}</li>
                      )
                    })}
                  </ul>
                                  </div>
                </div>
                <div className="renderfooterContainer rendercontainers">
                  <p className="renderfooterContent">{this.state.copyright}</p>
                </div>
                {(this.state.loading) ? <LoadingScreen /> : null}
          </div>
    );

  }
}

export default OrderRender;
