// variables
var time = 60;

//Stack class
class Stack {
	constructor() {
		this.items = [];
	}
	push(element) {
		this.items.push(element);
	}
	pop() {
		if (this.items.length === 0) {
			return 'Underflow';
		}
		this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length == 0;
	}
	printStack() {
		var str = '';
		for (var i = 0; i< this.items.length; i++) {
			str += this.items[i] + ' ';
		}
		return str;
	}
}

//game function
function startGame() {


}

//timer
document.getElementById('timer').innerHTML = time;

var timer = setInterval(function() {
	var boxTimer = document.getElementById("box-timer");
	time--;
	
	//remaining more than 10 seconds - color green 
	if (time > 10) {
		boxTimer.className += " bg-success";
	} else { // remaining 10 seconds - color red
		boxTimer.className += " bg-danger";
	}
	if (time < 0) {
		clearInterval(timer);
		window.location.href = 'game_over.html';

	} else {
		document.getElementById('timer').innerHTML = time;
	}


}, 1000);

