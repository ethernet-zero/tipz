/**
  Name: Tipz
  Author: Juanma Cabello
  Last modification date: 25/02/2010
  Version: 0.2.1
  
  Show a fancy tooltip from a DOMObject passed as parameter.
*/

// Members section
Tipz.prototype.id               = null;
Tipz.prototype.tipz             = new Array();
Tipz.prototype.backgroundColor  = '#000000';
Tipz.prototype.color            = '#FFFFFF';
Tipz.prototype.opacity          = 0.75;
Tipz.prototype.height           = null;
Tipz.prototype.width            = null;
Tipz.prototype.instances        = 0;
Tipz.prototype.hasShadow        = false;
Tipz.prototype.isSolid          = false;

// Constructor section
function Tipz(params) {
  this.id        = params.id ? params.id : 'tipz';
  this.hasShadow = params.hasShadow ? params.hasShadow : false;
  this.isSolid   = params.isSolid ? params.isSolid : false;
}

// Methods section
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
  // Canvas where the tooltip is going to be printed
  var canvas = document.createElement('div');
  canvas.id = this.id;
  canvas.className = 'tipz_canvas';
  
  // Set opacity of the canvas 
  if (!this.isSolid) {
    canvas.style.opacity = this.opacity;
  }
  
  // Create the arrow
  var arrow = this.makeArrow();
  
  // Appending the arrow to the canvas
  canvas.appendChild(arrow);  
  
  // The tip container
  var content = document.createElement('div');
  content.className = 'tipz_content';
  content.style.backgroundColor = this.backgroundColor;
  content.style.color = this.color;
  
  // The tip itself
  var text = document.createTextNode(tip);
  // Append the tip to the container
  content.appendChild(text);
  
  // Append the container to the canvas
  canvas.appendChild(content);
  
  // Adding the tip to the array of tips
  this.tipz.push(canvas);
  
  // Increase the instances counter
  this.instances++;
  
  // Append the canvas to the document
  document.body.appendChild(canvas);
  
  return true;
}

/**
	@name        makeArrow 
	@description Create the arrow div.
				 
				 The arrow is formed with 5 1 pixel height divs in stack. 
				 Each one has 2 more pixels than the previous starting from 1 pixel, so
				 they form a little pyramid pointing to the top.
				  
	@return      arrow	The arrow div to be appended to the canvas.
*/
Tipz.prototype.makeArrow = function() {
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
  @name        hide 
  @description Simply, delete the tooltip on screen
  
  @return      true
*/
Tipz.prototype.hide = function() {
  // Remove the tooltip from the document
  document.body.removeChild(document.getElementById(this.id));
  
  // Decrease the instances number
  this.instances--;
  
  return true;
}