const drawSpace = document.querySelector(".etch");
const colorPicker = document.querySelector(".userColor");
const rainbow = document.querySelector(".rainbow");

let drawColor = colorPicker.value;

// Changes content of Rainbow Button
function buttonSwitch() {
  if (rainbow.textContent == "Rainbow ON" ) {
    rainbow.textContent = "Rainbow OFF";
  } else {
    rainbow.textContent = "Rainbow ON";
  };
};

// Button toggle for RAINBOW Function
rainbow.addEventListener('click', () => {
  console.log(rainbow.textContent)
  buttonSwitch() 
});

// Generate high-value number for RGB Color model
function getColor() {
  return Math.floor((Math.random() * 155) +100 );
};

console.log(getColor())

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

// Changes bg to the selected color when moused over
function activePixels() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
      pixel.addEventListener('mouseenter', () => {
        let currentColor = colorPicker.value;
        if (rainbow.textContent == "Rainbow ON"){
          currentColor = "black";
          pixel.style.backgroundColor = currentColor;
        } else {
          pixel.style.backgroundColor = currentColor;
        };
      });
  });
}

// Overwrites grid size based on user input
const userResize = document.querySelector(".size");
function gridResize() {
  let tempSize = prompt("Specify pixel density (max:100):");
  let size = parseInt(tempSize);
  if (size > 100){
    size = 100;
  }
  return (size);
};

userResize.addEventListener('click', () => { 
  // Deletes previous grid
  drawSpace.innerHTML = "";
  resized = gridResize();
  setGridSize(resized);
  createGrid(resized);
  activePixels();
});

// Make initial grid
let initialSize = 16;
setGridSize(initialSize);
createGrid(initialSize);
activePixels();

// Functions remaining to add:
// Random BRIGHT Color generated from RAINBOW Button
