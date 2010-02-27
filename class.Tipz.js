/*
  Name: Tipz
  Author: Juanma Cabello
  Last modification date: 25/02/2010
  Version: 0.2
  
  Show a fancy tooltip from a DOMObject passed as parameter.
*/

// Members section
Tipz.prototype.id               = 'tip';
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
  this.hasShadow = params.hasShadow ? params.hasShadow : false;
  this.isSolid   = params.isSolid ? params.isSolid : false;
}

// Methods section
/* 
  @name        show 
  @description Prints the tooltip on screen. 
               
               All the tooltip is inside the canvas div. 
               There are two parts: the arrow and the content. 
               
               - The arrow is formed with 5 1 pixel height divs in stack. 
                 Each one has 2 more pixels than the previous starting from 1 pixel, so
                 they form a little pyramid pointing to the top.
               
               - The content is the tip itself.
  
  @params      DOMObject The DOM object which the tooltip is for.
  @params      tip       The text which is going to be shown in the tooltip.
  
  @return      true
*/
Tipz.prototype.show = function(DOMObject, tip) {
  // Canvas where the tooltip is going to be printed
  var canvas = document.createElement('div');
  canvas.id = this.id;
  canvas.className = 'canvas';
  
  // Set opacity of the canvas 
  if (!this.isSolid) {
    canvas.style.opacity = this.opacity;
  }
  
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.className = 'arrow';
    // First row 
  var firstRow = document.createElement('div');
  firstRow.className = 'row';
  firstRow.style.width = '1px';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
    // Second row
  var secondRow = document.createElement('div');
  secondRow.className = 'row';
  secondRow.style.width = '3px';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.className = 'row';
  thirdRow.style.width = '5px';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.className = 'row';
  fourthRow.style.width = '7px';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.className = 'row';
  fifthRow.style.width = '9px';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
  
  // Appending the arrow to the canvas
  canvas.appendChild(arrow);  
  
  // The tip container
  var content = document.createElement('div');
  content.className = 'content';
  
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

/* 
  @name        hide 
  @description Simply, delete the tooltip on screen
  
  @return      true
*/
Tipz.prototype.hide = function() {
  document.body.removeChild(document.getElementById(this.id));
  this.instances--;
  return true;
}