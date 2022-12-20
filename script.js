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
  }
  drawSpace.appendChild(cell);
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {

    pixel.addEventListener('click', () => {
      alert("You clicked something!");
    })
});