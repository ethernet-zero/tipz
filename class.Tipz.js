/**
  Name: Tipz
  Author: Juanma Cabello
  Last modification date: 29/02/2010
  Version: 0.6
  
  Show a fancy tooltip from a DOMObject passed as parameter.
   
  THIS LIBRARY IS MIT LICENSED
*/

// Members section
Tipz.prototype.id               = null;
Tipz.prototype.tipz             = new Array();
Tipz.prototype.backgroundColor  = '#000000';
Tipz.prototype.color            = '#FFFFFF';
Tipz.prototype.opacity          = 75;
Tipz.prototype.height           = null;
Tipz.prototype.width            = null;
Tipz.prototype.instances        = 0;
Tipz.prototype.hasShadow        = false;
Tipz.prototype.isSolid          = false;
Tipz.prototype.position         = 'bottom';

// Constructor section
function Tipz(params) {
  this.id              = params.id ? params.id : 'tipz';
  this.isSolid         = params.isSolid ? params.isSolid : false;
  if (this.isSolid) {
    this.hasShadow     = params.hasShadow ? params.hasShadow : false;
  }
  this.position        = params.position ? params.position : 'bottom';
  this.backgroundColor = params.backgroundColor ? params.backgroundColor : '#000000';
  this.color           = params.color ? params.color : '#FFFFFF';
}

// Helpers section
/**
	@name        makeTopArrow 
	@description Create the arrow div when the tooltip is set to apear on the top.
				 
				 The arrow is formed with 5 1 pixel height divs in stack. 
				 Each one has 2 more pixels than the previous starting from 1 pixel, so
				 they form a little pyramid pointing to the top.
				  
	@return      arrow	The arrow div to be appended to the canvas.
*/
Tipz.prototype.makeTopArrow = function() {
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.className = 'tipz_arrow';
    // First row 
  var firstRow = document.createElement('div');
  firstRow.className = 'tipz_row';
  firstRow.style.width = '1px';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
	// Second row
  var secondRow = document.createElement('div');
  secondRow.className = 'tipz_row';
  secondRow.style.width = '3px';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.className = 'tipz_row';
  thirdRow.style.width = '5px';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.className = 'tipz_row';
  fourthRow.style.width = '7px';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.className = 'tipz_row';
  fifthRow.style.width = '9px';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
	
  return arrow;
}

/**
	@name        makeBottomArrow 
	@description Create the arrow div when the tooltip is set to apear on the bottom.
				 
				 The arrow is formed with 5 1 pixel height divs in stack. 
				 Each one has 2 less pixels than the previous starting from 9 pixel, so
				 they form a little pyramid pointing to the bottom.
				  
	@return      arrow	The arrow div to be appended to the canvas.
*/
Tipz.prototype.makeBottomArrow = function() {
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.className = 'tipz_arrow';
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.className = 'tipz_row';
  fifthRow.style.width = '9px';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.className = 'tipz_row';
  fourthRow.style.width = '7px';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.className = 'tipz_row';
  thirdRow.style.width = '5px';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Second row
  var secondRow = document.createElement('div');
  secondRow.className = 'tipz_row';
  secondRow.style.width = '3px';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // First row 
  var firstRow = document.createElement('div');
  firstRow.className = 'tipz_row';
  firstRow.style.width = '1px';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
  	
  return arrow;
}

/**
	@name        makeRightArrow 
	@description Create the arrow div when the tooltip is set to apear on the left.
				 
				 The arrow is formed with 5 1 pixel width divs in line. 
				 Each one has 2 less pixels than the previous starting from 9 pixel, so
				 they form a little pyramid pointing to the right.
				  
	@return      arrow	The arrow div to be appended to the canvas.
*/
Tipz.prototype.makeRightArrow = function() {
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.className = 'tipz_arrow';
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.className = 'tipz_column';
  fifthRow.style.height = '9px';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.className = 'tipz_column';
  fourthRow.style.marginTop = '1px';
  fourthRow.style.height = '7px';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.className = 'tipz_column';
  thirdRow.style.marginTop = '2px';
  thirdRow.style.height = '5px';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Second row
  var secondRow = document.createElement('div');
  secondRow.className = 'tipz_column';
  secondRow.style.marginTop = '3px';
  secondRow.style.height = '3px';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // First row 
  var firstRow = document.createElement('div');
  firstRow.className = 'tipz_column';
  firstRow.style.marginTop = '4px';
  firstRow.style.height = '1px';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
  	
  return arrow;
}

/**
	@name        makeLeftArrow 
	@description Create the arrow div when the tooltip is set to apear on the right.
				 
				 The arrow is formed with 5 1 pixel width divs in line. 
				 Each one has 2 more pixels than the previous starting from 1 pixel, so
				 they form a little pyramid pointing to the right.
				  
	@return      arrow	The arrow div to be appended to the canvas.
*/
Tipz.prototype.makeLeftArrow = function() {
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.className = 'tipz_arrow';
    // First row 
  var firstRow = document.createElement('div');
  firstRow.className = 'tipz_column';
  firstRow.style.marginTop = '4px';
  firstRow.style.height = '1px';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
    // Second row
  var secondRow = document.createElement('div');
  secondRow.className = 'tipz_column';
  secondRow.style.marginTop = '3px';
  secondRow.style.height = '3px';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.className = 'tipz_column';
  thirdRow.style.marginTop = '2px';
  thirdRow.style.height = '5px';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.className = 'tipz_column';
  fourthRow.style.marginTop = '1px';
  fourthRow.style.height = '7px';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.className = 'tipz_column';
  fifthRow.style.height = '9px';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
  	
  return arrow;
}

/**
  @name        fade
  @description Make the transition effect
  
  @return      true
*/
Tipz.prototype.fade = function(startOpacity, endOpacity, time) {
  // Get the DOM object which the transtition is for
  var DOMObject = document.getElementById(this.id);
  
	// The method is being called with only one argument
	if (typeof endOpacity == 'undefined')
	{
	  if (this.isSolid) {
  		endOpacity = startOpacity;
		} else {
		  endOpacity = this.opacity;
		}
		startOpacity = 0;
	}
	
	// Set if the DOM object has to be removed at the ending of the fade
	if (startOpacity > endOpacity) {
	  var remove = true;
	} else {
	  var remove = false;
	}
	
	// Optimize time is 1
	time = typeof time == 'undefined' ? 1 : time;

	DOMObject.style.opacity = startOpacity/100;
	
	var fade = function()
	{
		if (startOpacity < endOpacity) 
		{
			startOpacity += 5;
			
			// Standard
			DOMObject.style.opacity    = startOpacity/100;
			// IE
			//DOMObject.style.filter     = "alpha(opacity=" + startOpacity + ")";
			// Mozilla
			DOMObject.style.MozOpacity = startOpacity+"%";
		} 
		else if (startOpacity >= endOpacity)
		{
			startOpacity -= 5;
			// Standard
			DOMObject.style.opacity    = startOpacity/100;
			// IE
			//DOMObject.style.filter     = "alpha(opacity=" + startOpacity + ")";
			// Mozilla
			DOMObject.style.MozOpacity = startOpacity+"%";
		}
		
		// If the transition is ended 
		if (startOpacity == endOpacity)
		{
			clearInterval(interval);
			// Only removes the DOM object if the transition is fadeOut
			if (remove && document.getElementById(this.id)) {
			  document.body.removeChild(DOMObject);
	    }
		}
	}
	
	var interval = setInterval(fade, time);
}


// Main methods section
/** 
  @name        show 
  @description Prints the tooltip on screen. 
               
               All the tooltip is inside the canvas div. 
               There are two parts: the arrow and the content. 
               
               - The arrow.               
               - The content is the tip itself.
  
  @params      DOMObject The DOM object which the tooltip is for.
  @params      tip       The text which is going to be shown in the tooltip.
  
  @see		   Tipz.prototype.makeArrow()
  
  @return      true
*/
Tipz.prototype.show = function(DOMObject, tip) {
  // Removes previous tooltip, just in case
  if (document.getElementById(this.id)) {
    document.body.removeChild(document.getElementById(this.id));
  }
  // Get the position and the dimsion of the DOM object
  var domHeight  = DOMObject.offsetHeight;
  var domWidth   = DOMObject.offsetWidth;
  var domTopPos  = DOMObject.offsetTop;
  var domLeftPos = DOMObject.offsetLeft;
  
  // Canvas where the tooltip is going to be printed
  var canvas = document.createElement('div');
  canvas.id = this.id;
  canvas.className = 'tipz_canvas';
  
  // Set opacity of the canvas 
  if (!this.isSolid) {
    canvas.style.opacity = this.opacity;
  }
  
  if (this.position == 'bottom') {
    // Set the postition of the canvas
    canvas.style.left = domLeftPos + (domWidth/2) - 3 + 'px';
    canvas.style.top = domTopPos + domHeight + 'px';
    
    // Create the arrow
    var arrow = this.makeTopArrow();
    
    // Appending the arrow to the canvas
    canvas.appendChild(arrow);  
  }
  
  // The tip container
  var content = document.createElement('div');
  content.className = 'tipz_content';
  content.style.backgroundColor = this.backgroundColor;
  content.style.color = this.color;
  
  // The tip itself
  var text = document.createTextNode(tip);
  
  // Append the tip to the container
  content.appendChild(text);
  
  if (this.position == 'right') {
    // Set the postition of the canvas   
    canvas.style.left = domLeftPos + (domWidth) + 'px';
    canvas.style.top = domTopPos + 'px';
    
    // Set the content style
    content.style.cssFloat = 'left';
    content.style.width = content.offsetWidth - 5 + 'px';
    
    // Create the arrow
    var arrow = this.makeLeftArrow();
    arrow.style.cssFloat = 'left';
    
    // Appending the arrow to the canvas
    canvas.appendChild(arrow);
  }
  
  // Append the container to the canvas
  canvas.appendChild(content);
  
  if (this.position == 'top') {
    // Set the postition of the canvas
    canvas.style.left = domLeftPos + (domWidth/2) - 3 + 'px';
    canvas.style.top = domTopPos - domHeight - 4 + 'px';
    
    // Create the arrow
    var arrow = this.makeBottomArrow();
    
    // Appending the arrow to the canvas
    canvas.appendChild(arrow);  
  }
  
  // Set the canvas hidden in order to get the position parameters
  canvas.style.visibility = 'hidden';
  
  // Append the canvas to the document
  document.body.appendChild(canvas);
  
  if (this.position == 'left') {
    // Set the postition of the canvas   
    canvas.style.left = domLeftPos - (domWidth/2) + 'px';
    canvas.style.top = domTopPos + 'px';
    
    // Set the content style
    content.style.cssFloat = 'left';
    content.style.width = content.offsetWidth - 5 + 'px';
    
    // Create the arrow
    var arrow = this.makeRightArrow();
    arrow.style.cssFloat = 'left';
    arrow.style.marginTop = (content.offsetHeight/2) - 4 + 'px';
    
    // Appending the arrow to the canvas
    canvas.appendChild(arrow);
  }
  
  if (this.position != 'right') {
    // Compensate the position
    canvas.style.left = canvas.offsetLeft - (canvas.offsetWidth/2) + 'px';
  } else {
    // Set the arrow vertical position
    arrow.style.marginTop = (content.offsetHeight/2) - 4 + 'px';
  }
  
  // Set the visibility to normal
  canvas.style.visibility = '';

  // Fade the tip in
  this.fade(100);
  
  // Adding the tip to the array of tips
  this.tipz.push(canvas);
  
  // Increase the instances counter
  this.instances++;
  
  return true;
}

/** 
  @name        hide 
  @description Simply, delete the tooltip on screen
  
  @return      true
*/
Tipz.prototype.hide = function() {
  // Fade the tip out
  this.fade(this.opacity, 0);
  
  // Decrease the instances number
  this.instances--;
  
  return true;
}