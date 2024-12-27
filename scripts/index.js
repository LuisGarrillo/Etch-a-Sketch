let size = 16;
let sizeButton;
let grid;

function hoverCell(event) {
    let opacityValue = parseFloat(event.target.style.opacity);
    event.target.style.opacity = ((opacityValue + 0.1 <= 1) ? opacityValue + 0.1 : 1).toString();
}

function createCell() {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `${960 / size}px`;
    newCell.style.height = `${960 / size}px`;
    newCell.style.opacity = 0;
    newCell.style.backgroundColor = "black";
    newCell.addEventListener("mouseover", hoverCell);
    return newCell;
}

function createGrid() {
    let cell = createCell();
    for (let i = 0; i < size ** 2; i++)
        grid.append(createCell());
}

function loadData() {
    sizeButton = document.getElementById("size-button");
    grid = document.getElementById("grid");

    sizeButton.addEventListener("click", updateGrid);

    createGrid();
}

function updateGrid() {
    let newSize = parseInt(document.getElementById("size").value)
    if (newSize > 100 || newSize < 1) {
        alert("The size value must be greater than 0 and less or equal than 100!");
        return
    }
    size = newSize;
    console.log(size);
    grid.replaceChildren();
    createGrid();
}

document.addEventListener("DOMContentLoaded", loadData);