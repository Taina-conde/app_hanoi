// variables
var time = 120;
var largeBlock = 3;
var mediumBlock = 2;
var smallBlock = 1;
var countMoves = 0;
var inputFrom = '';
var inputTo = '';

//Difficulty level
var level = window.location.search
level = level.replace('?', '')
if (level === 'easy') {
	time = 100;
}
else if (level === 'normal') {
	time = 60;
}
else if (level === 'hard') {
	time === 40;
}
else if (level ==='challenging') {
	time = 25;
}


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


//game function
function startGame() {
		//game dinamics
		
		var moveFrom = inputFrom
		if (moveFrom === 'L') {
				var block = towerLeft.peek()
				var moveTo = inputTo
				if (moveTo === "L") {
					alert('Invalid move. You selected the same tower! Choose another')
					return
				} else if (moveTo === 'M') {
					if (towerMiddle.isEmpty()) {
						var block = towerLeft.pop()
						towerMiddle.push(block)
						console.log('Middle tower:'+ towerMiddle.printStack())
						countMoves++

					} else {
						if (towerMiddle.peek() < block) {
							alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
							console.log('larger on smaller:')
							console.log('left' + towerLeft.printStack())
							console.log('middle' + towerMiddle.printStack())
							console.log('Right' + towerRight.printStack())
							return
						} else {
							var block = towerLeft.pop()
							towerMiddle.push(block)
							console.log('Middle tower:'+ towerMiddle.printStack())
							countMoves++
						}
					}
				} else if (moveTo === 'R') {
					if (towerRight.peek() < block) {
						alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
						console.log('larger on smaller:')
						console.log('left' + towerLeft.printStack())
						console.log('middle' + towerMiddle.printStack())
						console.log('Right' + towerRight.printStack())
						return
					} else {
						var block = towerLeft.pop()
						towerRight.push(block)
						console.log('Right tower:'+ towerRight.printStack())
						countMoves++
					}
				}//
		}//
			
		
		
		if (moveFrom === 'M') {
				var block = towerMiddle.peek()
				var moveTo = inputTo
				if (moveTo === "M") {
					alert('Invalid move. You selected the same tower! Choose another')
					return
				} else if (moveTo === 'L') {
					if (towerLeft.isEmpty()) {
						var block = towerMiddle.pop()
						towerLeft.push(block)
						console.log('Left tower:'+ towerLeft.printStack())
						countMoves++

					} else {
						if (towerLeft.peek() < block) {
							alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
							console.log('larger on smaller:')
							console.log('left' + towerLeft.printStack())
							console.log('middle' + towerMiddle.printStack())
							console.log('Right' + towerRight.printStack())
							return
						} else {
							var block = towerMiddle.pop()
							towerLeft.push(block)
							console.log('Left tower:'+ towerMiddle.printStack())
							countMoves++
						}
					}
				} else if (moveTo === 'R') {
					if (towerRight.peek() < block) {
						alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
						console.log('larger on smaller:')
						console.log('left' + towerLeft.printStack())
						console.log('middle' + towerMiddle.printStack())
						console.log('Right' + towerRight.printStack())
						return
					} else {
						var block = towerMiddle.pop()
						towerRight.push(block)
						console.log('Right tower:'+ towerRight.printStack())
						countMoves++
					}
				}//
		}//

		if (moveFrom === 'R') {
				var block = towerRight.peek()
				var moveTo = inputTo
				if (moveTo === "R") {
					alert('Invalid move. You selected the same tower! Choose another')
					return
				} else if (moveTo === 'M') {
					if (towerMiddle.isEmpty()) {
						var block = towerRight.pop()
						towerMiddle.push(block)
						console.log('Middle tower:'+ towerMiddle.printStack())
						countMoves++

					} else {
						if (towerMiddle.peek() < block) {
							alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
							console.log('larger on smaller:')
							console.log('left' + towerLeft.printStack())
							console.log('middle' + towerMiddle.printStack())
							console.log('Right' + towerRight.printStack())
							return
						} else {
							var block = towerRight.pop()
							towerMiddle.push(block)
							console.log('Middle tower:'+ towerMiddle.printStack())
							countMoves++
						}
					}
				} else if (moveTo === 'L') {
					if (towerLeft.peek() < block) {
						alert('Invalid mode. No disk can be placed on top of a smaller disk! Choose another')
						console.log('larger on smaller:')
						console.log('left' + towerLeft.printStack())
						console.log('middle' + towerMiddle.printStack())
						console.log('Right' + towerRight.printStack())
						return
					} else {
						var block = towerRight.pop()
						towerLeft.push(block)
						console.log('Left tower:'+ towerLeft.printStack())
						countMoves++
					}
				}//
		}//
		//Tower Images
		//Tower Left dinamics
		if (towerLeft.printStack() === '3 2 1 ') {
			document.getElementById('tower-left').src = "imagens/tower_complete.png"
		} else if (towerLeft.printStack() === '3 2 ') {
			document.getElementById('tower-left').src = "imagens/large_medium.png"
		} else if (towerLeft.printStack() === '3 ') {
			document.getElementById('tower-left').src = "imagens/large.png"
		} else if (towerLeft.printStack() === '2 ') {
			document.getElementById('tower-left').src = "imagens/medium.png"
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
		} else if (towerMiddle.printStack() === '2 ') {
			document.getElementById('tower-middle').src = "imagens/medium.png"
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
		} else if (towerRight.printStack() === '2 ') {
			document.getElementById('tower-right').src = "imagens/medium.png"
		} else if (towerRight.printStack() === '') {
			document.getElementById('tower-right').src = "imagens/tower_empty.png"
		} else if (towerRight.printStack() === '2 1 ') {
			document.getElementById('tower-right').src = "imagens/medium_small.png"
		} else if (towerRight.printStack() === '1 ') {
			document.getElementById('tower-right').src = "imagens/small.png"
		} else if (towerRight.printStack() === '3 1 ') {
			document.getElementById('tower-right').src = "imagens/large_small.png"
		}
		
}
 /* end of startGame function*/


//Capture Input functions
document.getElementById('move-from').disabled = ''
document.getElementById('move-to').disabled = 'disabled'


function captureInputFrom() {
	var inputFrom = document.getElementById('move-from').value
	var inputFromUpper = inputFrom.toUpperCase()
	inputFromUpper.trim()
	console.log('input from Upper' + inputFromUpper)
	document.getElementById('move-from').value =''

	if (inputFromUpper === 'L') {
		if (towerLeft.isEmpty()) {
			alert('Invalid move, the tower you selected is empty! Choose another')	
		} else {
			document.getElementById('move-from').disabled = 'disabled'
			document.getElementById('move-to').disabled = ''
		}

	} else if (inputFromUpper === 'M'){
		if (towerMiddle.isEmpty()) {
			alert('Invalid move, the tower you selected is empty! Choose another')
				
		} else {
			document.getElementById('move-from').disabled = 'disabled'
			document.getElementById('move-to').disabled = ''
			document.getElementById('move-to')
		}

	} else if (inputFromUpper === 'R'){
		if (towerRight.isEmpty()) {
			alert('Invalid move, the tower you selected is empty! Choose another')	
		}
		else {
			document.getElementById('move-from').disabled = 'disabled'
			document.getElementById('move-to').disabled = ''
			
		}
	}

	return inputFromUpper
}

function captureInputTo() {
	var inputTo = document.getElementById('move-to').value
	var inputToUpper = inputTo.toUpperCase()
	inputToUpper.trim()
	document.getElementById('move-to').value =''
	if (inputToUpper === 'L' || inputToUpper==='M' || inputToUpper==='R') {
		document.getElementById('move-from').disabled = ''
		document.getElementById('move-to').disabled = 'disabled'
		
	}

	return inputToUpper
}

// check if Right Tower is completed
function checkRightTower() {
	document.getElementById('number-moves').innerHTML = countMoves;
	if (towerRight.printStack() === '3 2 1 '){
		console.log(countMoves)
		window.location.href = 'victory.html'

		
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









