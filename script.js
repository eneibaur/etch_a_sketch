const drawSpace = document.querySelector(".etch");
const colorPicker = document.querySelector(".userColor");
const rainbow = document.querySelector(".rainbow");

let drawColor = colorPicker.value;

function buttonSwitch() {
  if(rainbow.textContent == "Rainbow OFF" ) {
    rainbow.textContent = "Rainbow ON";
  }
  if(rainbow.textContent == "Rainbow ON" ) {
    rainbow.textContent = "Rainbow OFF";
  };
};

// Button toggle for RAINBOW Function
rainbow.addEventListener('click', () => {
  console.log(rainbow.textContent)
  buttonSwitch() 
});

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
        pixel.style.backgroundColor = currentColor;
      });
  });
}

// Overwrites grid size based on user input
const userResize = document.querySelector(".size");
function gridResize() {
  let size = prompt("Specify pixel density (max:100):");
  return parseInt(size);
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
