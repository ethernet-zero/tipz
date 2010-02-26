/*
  Name: Tipz
  Author: Juanma Cabello
  Date last modification: 25/02/2010
  Version: 0.1
  
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
  @description Prints the tooltip on screen
  
  @params      DOMObject
  @return      true
*/
Tipz.prototype.show = function(DOMObject, tip) {
  // Canvas where the tooltip is going to be printed
  var canvas = document.createElement('div');
  canvas.id = this.id;
  canvas.style.margin = '2px';
  canvas.style.position = 'absolute';
  canvas.style.fontFamily = 'helvetica';
  canvas.style.fontSize = '10px';
  canvas.style.fontWeight = 'bold';
  
  // Arrow printing
  var arrow = document.createElement('div');
  arrow.style.textAlign = 'center';
    // First row 
  var firstRow = document.createElement('div');
  firstRow.style.width = '1px';
  firstRow.style.height = '1px';
  firstRow.style.margin = '0 auto 0 auto';
  firstRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(firstRow);
    // Second row
  var secondRow = document.createElement('div');
  secondRow.style.width = '3px';
  secondRow.style.height = '1px';
  secondRow.style.margin = '0 auto 0 auto';
  secondRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(secondRow);
    // Third row
  var thirdRow = document.createElement('div');
  thirdRow.style.width = '5px';
  thirdRow.style.height = '1px';
  thirdRow.style.margin = '0 auto 0 auto';
  thirdRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(thirdRow);
    // Fourth row
  var fourthRow = document.createElement('div');
  fourthRow.style.width = '7px';
  fourthRow.style.height = '1px';
  fourthRow.style.margin = '0 auto 0 auto';
  fourthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fourthRow);
    // Fifth row
  var fifthRow = document.createElement('div');
  fifthRow.style.width = '9px';
  fifthRow.style.height = '1px';
  fifthRow.style.margin = '0 auto 0 auto';
  fifthRow.style.backgroundColor = this.backgroundColor;
  arrow.appendChild(fifthRow);
  
  // Appending the arrow to the canvas
  canvas.appendChild(arrow);  
  
  // The tip container
  var content = document.createElement('div');
  content.style.padding = '5px';
  content.style.borderRadius = '2px'; 
  
  if (this.hasShadow) {
    content.style.boxShadow = '10px 10px 5px #888';
  }
  
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
  @description Delete the tooltip on screen
  
  @return      true
*/
Tipz.prototype.hide = function() {
  document.body.removeChild(document.getElementById(this.id));
  this.instances--;
  return true;
}