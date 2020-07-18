// variables
var time = 60;
var largeBlock = 3;
var mediumBlock = 2;
var smallBlock = 1
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
		return this.items.pop();
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
// create 3 stacks - TOWERS
var towerLeft = new Stack();
var towerMiddle = new Stack();
var towerRight = new Stack();
towerLeft.push(largeBlock) //Left stack full
towerLeft.push(mediumBlock)
towerLeft.push(smallBlock)
//Tower Left dinamics
if (towerLeft.printStack() === '3 2 1 ') {
	document.getElementById('tower-left').src = "imagens/tower_complete.png"
} else if (towerLeft.printStack() === '3 2 ') {
	document.getElementById('tower-left').src = "imagens/large_medium.png"
} else if (towerLeft.printStack() === '3 ') {
	document.getElementById('tower-left').src = "imagens/large.png"
} else if (towerLeft.printStack() === '') {
	document.getElementById('tower-left').src = "imagens/tower_empty.png"
} else if (towerLeft.printStack() === '2 1 ') {
	document.getElementById('tower-left').src = "imagens/medium_small.png"
} else if (towerLeft.printStack() === '1 ') {
	document.getElementById('tower-left').src = "imagens/small.png"
} else if (towerLeft.printStack() === '3 1 ') {
	document.getElementById('tower-left').src = "imagens/large_small.png"
}
//Tower Middle dinamics
if (towerMiddle.printStack() === '3 2 1 ') {
	document.getElementById('tower-middle').src = "imagens/tower_complete.png"
} else if (towerMiddle.printStack() === '3 2 ') {
	document.getElementById('tower-middle').src = "imagens/large_medium.png"
} else if (towerMiddle.printStack() === '3 ') {
	document.getElementById('tower-middle').src = "imagens/large.png"
} else if (towerMiddle.printStack() === '') {
	document.getElementById('tower-middle').src = "imagens/tower_empty.png"
} else if (towerMiddle.printStack() === '2 1 ') {
	document.getElementById('tower-middle').src = "imagens/medium_small.png"
} else if (towerMiddle.printStack() === '1 ') {
	document.getElementById('tower-middle').src = "imagens/small.png"
} else if (towerMiddle.printStack() === '3 1 ') {
	document.getElementById('tower-middle').src = "imagens/large_small.png"
}
//Tower Right dinamics
if (towerRight.printStack() === '3 2 1 ') {
	document.getElementById('tower-right').src = "imagens/tower_complete.png"
} else if (towerRight.printStack() === '3 2 ') {
	document.getElementById('tower-right').src = "imagens/large_medium.png"
} else if (towerRight.printStack() === '3 ') {
	document.getElementById('tower-right').src = "imagens/large.png"
} else if (towerRight.printStack() === '') {
	document.getElementById('tower-right').src = "imagens/tower_empty.png"
} else if (towerRight.printStack() === '2 1 ') {
	document.getElementById('tower-right').src = "imagens/medium_small.png"
} else if (towerRight.printStack() === '1 ') {
	document.getElementById('tower-right').src = "imagens/small.png"
} else if (towerRight.printStack() === '3 1 ') {
	document.getElementById('tower-right').src = "imagens/large_small.png"
}
var block = towerLeft.pop()

console.log(block)
towerMiddle.push(block)
console.log('left:' + towerLeft.printStack())
console.log('middle' + towerMiddle.printStack() + 'end')
if (towerMiddle.printStack() === '1 ') {
	document.getElementById('tower-middle').src = "imagens/small.png"
}



//game function
function startGame() {
	while (towerRight.printStack() !== '3 2 1 ') {
		//Tower Left dinamics
		if (towerLeft.printStack() === '3 2 1 ') {
			document.getElementById('tower-left').src = "imagens/tower_complete.png"
		} else if (towerLeft.printStack() === '3 2 ') {
			document.getElementById('tower-left').src = "imagens/large_medium.png"
		} else if (towerLeft.printStack() === '3 ') {
			document.getElementById('tower-left').src = "imagens/large.png"
		} else if (towerLeft.printStack() === '') {
			document.getElementById('tower-left').src = "imagens/tower_empty.png"
		} else if (towerLeft.printStack() === '2 1 ') {
			document.getElementById('tower-left').src = "imagens/medium_small.png"
		} else if (towerLeft.printStack() === '1 ') {
			document.getElementById('tower-left').src = "imagens/small.png"
		} else if (towerLeft.printStack() === '3 1 ') {
			document.getElementById('tower-left').src = "imagens/large_small.png"
		}
		//Tower Middle dinamics
		if (towerMiddle.printStack() === '3 2 1 ') {
			document.getElementById('tower-middle').src = "imagens/tower_complete.png"
		} else if (towerMiddle.printStack() === '3 2 ') {
			document.getElementById('tower-middle').src = "imagens/large_medium.png"
		} else if (towerMiddle.printStack() === '3 ') {
			document.getElementById('tower-middle').src = "imagens/large.png"
		} else if (towerMiddle.printStack() === '') {
			document.getElementById('tower-middle').src = "imagens/tower_empty.png"
		} else if (towerMiddle.printStack() === '2 1 ') {
			document.getElementById('tower-middle').src = "imagens/medium_small.png"
		} else if (towerMiddle.printStack() === '1 ') {
			document.getElementById('tower-middle').src = "imagens/small.png"
		} else if (towerMiddle.printStack() === '3 1 ') {
			document.getElementById('tower-middle').src = "imagens/large_small.png"
		}
		//Tower Right dinamics
		if (towerRight.printStack() === '3 2 1 ') {
			document.getElementById('tower-right').src = "imagens/tower_complete.png"
		} else if (towerRight.printStack() === '3 2 ') {
			document.getElementById('tower-right').src = "imagens/large_medium.png"
		} else if (towerRight.printStack() === '3 ') {
			document.getElementById('tower-right').src = "imagens/large.png"
		} else if (towerRight.printStack() === '') {
			document.getElementById('tower-right').src = "imagens/tower_empty.png"
		} else if (towerRight.printStack() === '2 1 ') {
			document.getElementById('tower-right').src = "imagens/medium_small.png"
		} else if (towerRight.printStack() === '1 ') {
			document.getElementById('tower-right').src = "imagens/small.png"
		} else if (towerRight.printStack() === '3 1 ') {
			document.getElementById('tower-right').src = "imagens/large_small.png"
		}
		//game dinamics
		var moveFrom = prompt("Where do you want to move the block from? L, M or R")

	}


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

