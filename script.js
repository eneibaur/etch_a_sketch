// const testH1 = document.querySelector(".test")
// testH1.style.color = "blue";

// Sets size for grid
const drawSpace = document.querySelector(".etch");
let drawSize = 16;
drawSpace.style.gridTemplateRows = `repeat(${drawSize})`;
drawSpace.style.gridTemplateColumns = `repeat(${drawSize})`;

// Creates grid for etch-a-sketch
let row = 1;
let column = 1;
for (let i = 1; i <= (drawSize * drawSize); i++) {
  let cell = document.createElement('div');
  cell.style.gridRow = row;
  cell.style.gridColumn = column;
  cell.classList.add('pixel');
  column += 1;
  if (column === drawSize + 1) {
    row += 1;
    column = 1;
  };
  drawSpace.appendChild(cell);
}

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
  return size;
};
userResize.addEventListener('click' () => {
  drawSize = gridResize();
})