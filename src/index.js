import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import OrderRender from './components/orderRender'
import OrderConfirmation from './components/orderConfirmation'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
import firebase from 'firebase'
import Home from './components/home'
import GetOrder from './components/getOrder'

var config = {
    apiKey: "AIzaSyBcz2A_kwN2pRJObdyrl3yZHx5_CoOchYc",
    authDomain: "codingcocktails.firebaseapp.com",
    databaseURL: "https://codingcocktails.firebaseio.com",
    projectId: "codingcocktails",
    storageBucket: "codingcocktails.appspot.com",
    messagingSenderId: "782754640026"
  };
  var FirebaseApp = firebase.initializeApp(config);

import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render(
  
<BrowserRouter >
<div>

 <Route exact path='/' component={Home}/>
 <Route exact path='/edit/:title' render={(props) => (
  <App {...props} FirebaseApp={FirebaseApp}/>
)}/>

 <Route path='/order/:id' render={(props) => (
  <GetOrder {...props} FirebaseApp={FirebaseApp}/>
)}/>

 <Route path='/order-confirmation/:id' component={OrderConfirmation}/>
 </div>
</BrowserRouter>


  ,
  document.getElementById('root')
);
