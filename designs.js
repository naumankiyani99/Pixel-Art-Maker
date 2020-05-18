// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// varibales for input
const tableElement = document.querySelector('#pixelCanvas');
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("click", function (event) {
	event.preventDefault();
	let width = inputWidth.value;
	let height = inputHeight.value;
	tableElement.innerHTML = "";
	gridMaker(height, width);
	pixelClicker();
})


// selects the size of grid.

// makes grid using height and width
function gridMaker(height, width) {
    for(let i = 0; i < height; i++) {
    	tableElement.innerHTML += "<tr></tr>";
    };

    for(let i = 0; i < width; i++) {
    	let rows = document.querySelectorAll("tr");
    	for(const row of rows){
    		row.innerHTML += "<td></td>"
    	}
    };
};
// changes color with chosen color
function pixelClicker() {
	let tableCells = document.querySelectorAll("td");
	for(const cell of tableCells){
		cell.addEventListener("click", function(event) {
			let color = colorPicker.value;
			event.target.setAttribute("style", `background:${color}`);
		})
	}
};
