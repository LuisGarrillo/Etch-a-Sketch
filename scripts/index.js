let size = 16;

function createCell() {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `${960 / size}px`;
    newCell.style.height = `${960 / size}px`;
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