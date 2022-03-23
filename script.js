const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const gridButton = document.querySelector("#create");

function randomColor() {
	return Math.floor(Math.random() * 256);
}

function resetGrid() {
	resetButton.addEventListener("click", () => {
		container.textContent = "";
	});
}

function gridManipulation(items) {
	items.addEventListener("mouseover", () => {
		items.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
	});
}

gridButton.addEventListener("click", () => {
	let numOfSquares = prompt("Please enter a number between 2-100", 16);
	if (numOfSquares > 100) {
		alert(
			"This is too big of a number! Please press the button again and try a smaller number!"
		);
	} else {
		container.textContent = "";
		let sizeOfGrid = numOfSquares * numOfSquares;
		container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
		for (let i = 0; i < sizeOfGrid; i++) {
			const square = document.createElement("div");
			container.appendChild(square);
			square.setAttribute("id", "square");
			// square.style.height = `500px/${numOfSquares}`;
			// square.style.width = `500px/${numOfSquares}`;
			square.textContent = i;
			gridManipulation(square);
			resetGrid(square);
		}
	}
});
