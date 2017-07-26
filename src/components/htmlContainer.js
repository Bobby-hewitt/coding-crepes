import React, { Component } from 'react';
import HtmlTag from './htmlTag'
import HtmlSingleTag from './htmlSingleTag'
import ImageTag from './imageTag'
import Comment from './comment'
import ContinueButton from './continueButton'
import CssLink from './cssLink'
class HtmlContainer extends Component {


	updateState(item, payload, key){
		console.log(item, payload, key)
		this.props.updateState(item, payload,key)
	}

	buttonAction(item, payload, key){
		console.log(item, payload, key)
	}

	removeItem(item, index){
		this.props.removeItem(item, index)
	}

	addItem(item){
		this.props.addItem(item)
	}


  render() {
  	console.log(this.props.title)
    return (
    	<div>
    		<Comment lang='html' comment="Developers like to pretend that what they do is hard but making apps and websites is actually really easy.  I guess you've studied a language at some point at scool or college.  Learning code is learning a language, except there are only about a hundred words you need to learn! Lets give it a go here... "/>
	    	<Comment lang='html' comment="HTML (Hyper Text Markup Language) is the foundation of the web. It defines the structure. It is the skeleton of the web. Youll see that when you change the HTML here the content on the right changes. It doesn't look pretty at the moment but we'll get the building blocks in place and we'll the the Picasso bit soon.  In HTML, all the tags you open you have to close like this... <title></title> You'll see this as we go along "/>



	    	<p className={this.props.classname + " inline"} style={{color:'rgb(101,101,101)'}}>&#60;!DOCTYPE html&#62; -- here we have delcared that our document is HTML</p>
	    	<HtmlSingleTag tag="html" margin="0px" />
	    	 {/*head*/}
	    	 <Comment lang='html' comment=" Each web page has a 'head' and a 'body'. All the important information about the page: the title, styles, links, scripts, and other information goes in the head.  No one actually sees this stuff, it's for search engines and other clever things to know what your page is about.  The bits people see go in the <body> tags."/>
	    	<HtmlSingleTag tag="head" margin="15px" />
		   		{/*title*/}

		   		<Comment lang='html' comment="The title is what shows in the web browser tab."/>
		      	<HtmlTag margin='30px' index="0" contenteditable={false} item="pageTitle" identifier="uneditable" content="Coding Cocktails" tag="title" />
		      	<HtmlSingleTag tag="meta charset='UTF-8'" margin="30px" />
		 
		      	<Comment lang='html' comment="This is a link to your stylesheet, in there you'll write the code which will make your page look great!  We'll do that once we've got the structure in place."/>
		      	<CssLink margin='30px'/>
			<HtmlSingleTag tag="/head" margin="15px" />
	   		{/*body*/}
			<HtmlSingleTag tag="body" margin="15px" />
			<Comment lang='html' comment=" We give our elements ids and classes so we can refer to them in other parts of the code.  When you write HTML code from scratch you make up your own class and id names. We're going to use these classes and ids to style the components later."/>
			<HtmlSingleTag tag="div" renderId="background" margin="30px" />


			<Comment lang='html' comment="  Here is a <div> enclosing an <h1> tag. Divs are divisions or sections. 'h' tags are for headers. <h1> are the biggest headers and <h6> are the smallest."/>
			<HtmlSingleTag tag="div" renderId="headerContainer" margin="45px" />
				<HtmlTag margin='60px' contenteditable={false} content="Coding Cocktails" tag="h1" renderId="headerContent" identifier="uneditable"/>
			<HtmlSingleTag tag="/div" margin="45px" />


			

			<Comment lang='html' comment="Elements can have a class, an id or both. Ids refer to one-off elements whereas classes refer to groups of elements which behave in the same way. Here we only have one 'title' element so that is the id, but we have lots of content blocks so we are going to use the class name 'contentBlock' throughout. "/>
			
			<Comment lang='html' comment="Okok, enough chat... Let's get to work.... All the white text on this page is editable. Give your crepe a name!"/>
			<HtmlTag margin='45px' contenteditable={true} content={this.props.title} tag="h1" renderId="title"  renderClass="contentBlock" updateState={this.updateState.bind(this)} index="0" item="title"identifier="title"/>
			   	
			<Comment lang='html' comment="Now we're going to pick an image.  You can find a url for most images on the web by right-clicking it and selecting 'copy image url'. Give it a go and paste the url below."/>
			 <ImageTag identifier="imageTag" margin="45px" index="0" item="image" contenteditable={true} updateState={this.updateState.bind(this)} content={this.props.image}/>
			
			{/*ingredients*/}
			<Comment lang='html' comment="Every so often, coding languages get updated for simplicity and ease. An 'article' is a new HTML5 feature which makes it easy to manage self-contained content blocks."/>
			<HtmlSingleTag tag="article" renderClass="ingredients contentBlock" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Ingredients" tag="h3" identifier="uneditable"/>
			
			<Comment lang='html' comment=" Now it's time to choose what you're having on your crepe.  <ul> tags represent unordered lists. This means it doesn’t get numbered or affect anything if the order is altered. Go ahead and input the ingredients for your cocktail into this list."/>
			<Comment lang='html' comment={this.props.ingredientsComment}/>

			<HtmlSingleTag tag="ul" margin="60px" />
			{this.props.ingredients.map((ingredient, i) => {
				return(
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} item="ingredients" renderClass="listItem ingredient" updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={ingredient} tag="li" identifier={'ingredients' + i}/>
				)
			})}
			<button onClick={this.addItem.bind(this, 'ingredients')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			<HtmlSingleTag tag="/ul" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />
			<Comment lang='html' comment="<ol> tags represent ordered lists. Make sure you make your instructions specific, we're going to follow them exactly."/>
			<HtmlSingleTag tag="article" renderClass="method contentBlock" margin="45px" />
			<HtmlTag margin='60px' contenteditable={false} content="Method" tag="h3" identifier="uneditable"/>
			<HtmlSingleTag tag="ol" margin="60px" />
			{this.props.methods.map((method, i) => {
				return(
		
				<HtmlTag showRemoveButton={true} removeItem={this.removeItem.bind(this)} margin='75px' key={i} renderClass="listItem method"  item="methods"updateState={this.updateState.bind(this)} index={i}contenteditable={true} content={method} tag="li" identifier={'method' + i}/>
				
			
				)
			})}
			<button onClick={this.addItem.bind(this, 'methods')} className="inline button addButton" style={{marginLeft: '75px'}}>+</button>
			
			<HtmlSingleTag tag="/ol" margin="60px" />
			<HtmlSingleTag tag="/article" margin="45px" />

		
			
			<HtmlSingleTag tag="/div" margin="30px" />

			<Comment lang='html' comment="Footers usually provide useful information about the website such as the copyright, company number, address, etc.  Let’s add the copyright and include the name of everyone in your team!"/>

		{/*Footer*/}
			<HtmlSingleTag tag="div" renderId="footerContainer" margin="30px" />
			<HtmlTag margin='45px' contenteditable={true} content={this.props.copyright} tag="p" renderId="footerContent"  renderClass="copyright" updateState={this.updateState.bind(this)} index="0" item="copyright" identifier="copyright"/>
			<HtmlSingleTag tag="/div" margin="30px" />
   			<HtmlSingleTag tag="/body" margin="15px" />

   			<HtmlSingleTag tag="/html" margin="0px" />


<Comment lang='html' comment="That's it, you've built a webpage!  Now for the fun part, lets make it look great!  Click on the app.css tab at the top of the page. "/>
   		</div>
   		

   	 );
  }
}

export default HtmlContainer;
