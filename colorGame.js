var colors = generateRandomColors(6)
var numOfSquares = 6;

var squares = document.querySelectorAll(".square");
var target = pickRandomColor(6);
var targetDisplay = document.getElementById("target");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	for (var i=0; i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			for(var j=0; j<modeBtns.length; j++) {
				modeBtns[j].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numOfSquares = 3;
			} else {
				numOfSquares = 6;
			}
			refresh();
		})
	}
	targetDisplay.textContent = target;
	resetButton.addEventListener("click", refresh);
	refreshSquares();
}


function refresh() {
	colors = generateRandomColors(numOfSquares);
	target = pickRandomColor(numOfSquares);
	targetDisplay.textContent = target;
	refreshSquares();
	h1.style.background = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New Colors"
}



//draw squares on the background
function refreshSquares() {
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.background;
				if (clickedColor == target) {
					this.style.background = "#232323";
					message.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeSquareColors(target);
					h1.style.background = target;

				} else {
					this.style.background = "#232323"
					message.textContent = "Try Again"
				}
			})
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeSquareColors(color) {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickRandomColor(range) {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	var colors = [];
	for (var i=0; i<num; i++) {
		colors.push(randomColor());
	}
	return colors
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}