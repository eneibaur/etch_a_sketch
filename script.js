// const testH1 = document.querySelector(".test")
// testH1.style.color = "blue";

const drawSpace = document.querySelector(".etch");
const pixel = document.createElement('div');
pixel.classList.add('pixel')

let startingSize = 16;


for (let i = 0; i < (startingSize * startingSize); i++){
    drawSpace.appendChild(pixel);
}
