let size = 16;

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
    let grid = document.getElementById("grid");
    for (let i = 0; i < size ** 2; i++)
        grid.append(createCell());
}

function loadData() {
    createGrid();
}

document.addEventListener("DOMContentLoaded", loadData);