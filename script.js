// const testH1 = document.querySelector(".test")
// testH1.style.color = "blue";

const drawSpace = document.querySelector(".etch");
let startingSize = 20;


for (let i = 0; i < (startingSize * startingSize); i++){
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    drawSpace.appendChild(pixel);
}
