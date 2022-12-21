// const testH1 = document.querySelector(".test")
// testH1.style.color = "blue";

const drawSpace = document.querySelector(".etch");

// Sets size for grid
function setGridSize(size) {
  drawSpace.style.gridTemplateRows = `repeat(${size})`;
  drawSpace.style.gridTemplateColumns = `repeat(${size})`;
};

// Creates grid for etch-a-sketch
function createGrid(size) {
  let row = 1;
  let column = 1;
  for (let i = 1; i <= (size * size); i++) {
    let cell = document.createElement('div');
    cell.style.gridRow = row;
    cell.style.gridColumn = column;
    cell.classList.add('pixel');
    column += 1;
    if (column === size + 1) {
      row += 1;
      column = 1;
    };
    drawSpace.appendChild(cell);
  };
};

// Make initial grid
let drawSize = 16;
setGridSize(drawSize);
createGrid(drawSize);

// Changes bg to black when moused over
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', () => {
      pixel.style.backgroundColor = "black"
    });
});

// Overwrites grid size based on user input
// create button labeled "grid size"
// on click, button prompts user for number less than 100
// user input is then saved into "drawsize" Variable
const userResize = document.querySelector(".size");
function gridResize() {
  let size = prompt("Specify pixel density (max:100):");
  return parseInt(size);
};

userResize.addEventListener('click', () => {
  resized = gridResize();
  setGridSize(resized);
  createGrid(resized);
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
    pixel.addEventListener('mouseenter', () => {
      pixel.style.backgroundColor = "black"
    });
});
});
