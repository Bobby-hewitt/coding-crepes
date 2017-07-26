import React, { Component } from 'react';

import CssDeclarator from './cssDeclarator'

import Comment from './comment'

class CssContainer extends Component {

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}

	changeCss(item, property, value){
		this.props.changeCss(item, property, value)
	}



  render() {
    return (
    	<div>
        <Comment lang='css' comment="My Style Sheet"/>
        
    	<Comment lang='css' comment="This is your CSS file - Your Cascading Style Sheet. CSS helps us describe the style of an HTML document- it tells the website how HTML elements should be displayed."/>
        <Comment lang='css' comment="Let's start by styling the page header. Remember we talked about ID's and classes? '#' refers to the ID from the HTML whereas a ‘.’  refers to a class. This element is 'fixed' in the top left corner. This means it doesn't move when you scroll. Try adding a border color (code uses American English spellings) of 'grey', a border-width of '2px' and a border-style of 'solid'. Let's also set the background-color to 'white'."/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="headerContainerCss" declarator="#headerContainer" properties={this.props.headerContainerCss}comments={['position: fixed;', 'top: 0px;', 'left: 0px;']}/>
        
        <Comment lang='css' comment="The green writing is called the 'selector'. This selector would affect all the <h1> tags inside the #headerContainer. We've imported some fonts for you to try out. Copy one from the comment below and paste it into the font-family property. Then, try setting the font size to '20px' and choose a colour. "/>
        <Comment lang='css' comment="These are some nice font pairs, you don't have to stick to them though, see what you can come up with... "/>
        <Comment lang='css' comment="Unica One + Vollkorn , Alegreya + Lato , Fjalla One + Cantarell , Playfair Display + Source Sans Pro , Raleway + Roboto Slab , Roboto Condensed + Roboto ,  Montserrat + Merriweather , Amatic SC + Josefin Sans , Oswald + Droid Serif , Open Sans Condensed + Open Sans "/>
          
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="headerContentCss" declarator="#headerContainer h1" properties={this.props.headerContentCss}/>
       
    	
    	<Comment lang='css' comment="As mentioned previously, the '.' refers to classes specified in the HTML. This selector will style all the elements with the class name 'contentBlock'. It all looks a bit cramped at the moment so try adding a margin-top of '20px'."/>
    	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="containersCss" declarator=".contentBlock" properties={this.props.containersCss}/>
    	<Comment lang='css' comment="Feel free to set a background colour. As standard, elements sit below the previous one. When we set a position to 'fixed', as we did with our header, it takes it out of the content flow. Look what happens if you set 'padding-top' to 0px. Padding is the inner space of an element as opposed to margin which is the outer space. If we'd have used margin here there would have been a white space above the element. "/>	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="containerCss" declarator="#background" properties={this.props.containerCss}/>
    	<Comment lang='css' comment="You need to set a size for the image.  This can be in px but it makes more sense to size these as a percentage of the container, that way when the screen changes size it won't get too messy.  YOu can set the width to any percentage.  Try setting the width to '50%' and margin-left to '25%" />	
	    	<CssDeclarator changeCss={this.changeCss.bind(this)} hasPosition={true} item="imageCss" declarator="#image" properties={this.props.imageCss}/>

    	<Comment lang='css' comment="Now play with some of these styles. text-align can be set to 'left', 'center' or 'right'. "/>		
    		<CssDeclarator changeCss={this.changeCss.bind(this)} hasPosition={true} item="titleCss" declarator="#title" properties={this.props.titleCss}/>
    	<Comment lang='css' comment="You can select items with their tags too. Try setting the size and colour of the <h3> tags. If we were to always write the names of colors we'd be very limited. You can use the red green and blue values to create the exact color you want. black is rgb(0,0,0) and white is rgb(255,255,255). You can find the right colour at https://www.webpagefx.com/web-design/color-picker. "/>	
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="sectionHeaderCss" declarator="h3" properties={this.props.sectionHeaderCss}/>
    	<Comment lang='css' comment="You can increase the gap between the bullet points using the 'marginTop' property. This is calculated in 'px'"/>
    		<CssDeclarator changeCss={this.changeCss.bind(this)} item="listItemCss" declarator=".listItem" properties={this.props.listItemCss}/>
	   <Comment lang='css' comment="You can turn bullet points off by setting list style type to 'none', or you can change these to numbers by setting it to 'decimal'."/>
	    	<CssDeclarator changeCss={this.changeCss.bind(this)} item="ingredientCss" declarator=".ingredient" properties={this.props.ingredientCss}/>
	    <Comment lang='css' comment="Now, let's style the footer. You know how to do this now! Have you noticed the semi colon at the end of everything you type? Semicolons denote the end of a statement. "/>
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="footerContainerCss" declarator="#footerContainer" properties={this.props.footerContainerCss}/>
        <Comment lang='css' comment="Finally, style the text in the footer."/>   
            <CssDeclarator changeCss={this.changeCss.bind(this)} item="footerContentCss" declarator="#footerContainer p" properties={this.props.footerContentCss}/>
       <Comment lang='css' comment="That's it! You've got the basics. Now you can go back and have a play. Make it look as nice as you can. Don’t worry about breaking anything! Once you're done, click ‘SUBMIT ORDER' at the top right hand of the page to save it to the interwebs! "/>   
        

	    	


   		</div>
   	 );
  }
}

export default CssContainer;
