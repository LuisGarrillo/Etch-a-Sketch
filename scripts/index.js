let size = 16;
let sizeButton;
let randomizeButton;
let resetButton;
let grid;
const colors = ["red", "blue", "yellow", "purple", "green", "orange"];

function hoverCell(event) {
    let opacityValue = parseFloat(event.target.style.opacity);
    event.target.style.opacity = ((opacityValue + 0.1 <= 1) ? opacityValue + 0.1 : 1).toString();
}

function createCell(random) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `${960 / size}px`;
    newCell.style.height = `${960 / size}px`;
    newCell.style.opacity = 0;

    newCell.style.backgroundColor = (random) ? colors[Math.floor(Math.random() * colors.length)] : "black";

    newCell.addEventListener("mouseover", hoverCell);
    return newCell;
}

function createGrid(random) {
    for (let i = 0; i < size ** 2; i++)
        grid.append(createCell(random));
}

function loadData() {
    sizeButton = document.getElementById("size-button");
    randomizeButton = document.getElementById("randomize-button");
    resetButton = document.getElementById("reset-button");
    grid = document.getElementById("grid");

    sizeButton.addEventListener("click", clearGrid);
    randomizeButton.addEventListener("click", randomizeGrid);
    resetButton.addEventListener("click", clearGrid);

    createGrid(random=false);
}

function updateGrid(random) {
    let newSize = parseInt(document.getElementById("size").value);
    if (newSize > 100 || newSize < 1) {
        alert("The size value must be greater than 0 and less or equal than 100!");
        return;
    }
    size = newSize;
    console.log(size);
    grid.replaceChildren();
    createGrid(random);
}

function randomizeGrid(){
    updateGrid(random=true);
}

function clearGrid() {
    updateGrid(random=false);
}

document.addEventListener("DOMContentLoaded", loadData);