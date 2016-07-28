var Btn = function(width, height, background, color, margin){
	this.width = width;
	this.height = height;
	this.background = background;
	this.color = color;
  this.margin = margin;

	/*this.generate = function(){
		// create the div
		var body = document.getElementsByTagName('body')[0];
		var div = document.createElement('div');
		//style the div
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.background;
		div.style.color = this.color;
		body.appendChild(div);
	}*/
}

Btn.prototype.generate = function(){
	// create the div
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	//style the div
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.backgroundColor = this.background;
	div.style.color = this.color;
  div.style.margin = this.margin + 'px';


	body.appendChild(div);
}

/*var box1 = new Box(250, 350, 'red', 'white');
box1.generate();*/


var addNewBtn = function(){
	var widthInputValue = document.getElementById('width').value;
	var heightnputValue = document.getElementById('height').value;
	var bgInputValue = document.getElementById('bg').value;
	var colorInputValue = document.getElementById('color').value;
  var marginInputValue = document.getElementById('margin').value


	var dynamicllyAddedBtn = new Btn(widthInputValue, heightnputValue, bgInputValue, colorInputValue, marginInputValue);
	dynamicllyAddedBtn.generate();
}

var buttonAdd = document.getElementById('create-btn');
buttonAdd.addEventListener('click', addNewBtn);
