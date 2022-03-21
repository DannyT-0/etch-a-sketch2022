const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const gridButton = document.querySelector("#create");

function randomColor() {
	return Math.floor(Math.random() * 256);
}

function resetGrid(items) {
	resetButton.addEventListener("click", () => {
		items.style.backgroundColor = "white";
	});
}

function gridManipulation(items) {
	items.addEventListener("mouseover", () => {
		items.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
	});
}

for (let i = 0; i < 256; i++) {
	const square = document.createElement("div");
	container.appendChild(square);
	square.setAttribute("id", "square");
	gridManipulation(square);
	resetGrid(square);
}

gridButton.addEventListener("click", () => {
	let numOfSquares = prompt("Please enter a number between 2-100", 16);
	if (numOfSquares > 100) {
		alert(
			"This is too big of a number! Please press the button again and try a smaller number!"
		);
	} else {
		for (let i = 0; i < numOfSquares * numOfSquares; i++) {
			const square = document.createElement("div");
			container.appendChild(square);
			square.setAttribute("id", "square");
			gridManipulation(square);
			resetGrid(square);
		}
	}
});
