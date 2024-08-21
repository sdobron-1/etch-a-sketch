let gridSize = 0;
let color = '#';

for(x=0; x<256;x++) {
    let grid = document.createElement("div");
    grid.className="cell";
    grid.id=`${x}`;
    document.getElementById("grid").appendChild(grid);
}
colorChange();

function colorChange() {
let colorChange = document.getElementsByClassName("cell");
    for (const element of colorChange) {
    element.addEventListener("mouseenter", (e) => {
    element.style.backgroundColor = "magenta";
    });
    }
}

function getGridSize() {
let root = document.documentElement;
gridInput = prompt("Enter a Grid Size");
gridLength = gridInput;
gridSize=gridInput*gridInput;
gridHeightVar = 350/gridLength+"px";
root.style.setProperty('--height',gridHeightVar);
gridWidthVar = 960/gridLength+"px";
root.style.setProperty('--width',gridWidthVar);
eraseGrid();
resetGrid();
return;
}

function eraseGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
}

function resetGrid() {
    for(x=0; x<gridSize;x++) {
        let grid = document.createElement("div");
        grid.className="cell";
        grid.id=`${x}`;
        let colorChange = document.getElementsByClassName("cell");
        for (const element of colorChange) {
        element.style.backgroundColor=""; 
        }
        document.getElementById("grid").appendChild(grid);
        document.getElementById("grid").style.display = "none";
        document.getElementById("grid").style.display = "flex";
    } 
    colorChange();
}