const container = document.querySelector("#container");
const resetButton = document.querySelector("button");

function randomColor() {
	return Math.floor(Math.random() * 256);
}

// for (let i = 0; i < 256; i++) {
// 	const square = document.createElement("div");
// 	container.appendChild(square);
// 	square.setAttribute("id", "square");
// 	square.addEventListener("mouseover", () => {
// 		square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
// 	});
// }

resetButton.addEventListener("click", () => {
	let numOfSquares = prompt("Please enter a number between 1-100", 16);
	if (numOfSquares > 100) {
		alert(
			"This is too big of a number! Please press the button again and try a smaller number!"
		);
	} else {
		for (let i = 0; i < numOfSquares * numOfSquares; i++) {
			const square = document.createElement("div");
			container.appendChild(square);
			square.setAttribute("id", "square");
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
			});
		}
	}
});
