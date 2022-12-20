// const testH1 = document.querySelector(".test")
// testH1.style.color = "blue";

const drawSpace = document.querySelector(".etch");
let drawSize = 100;

drawSpace.style.gridTemplateRows = `repeat(${drawSize})`;
drawSpace.style.gridTemplateColumns = `repeat(${drawSize})`;

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
