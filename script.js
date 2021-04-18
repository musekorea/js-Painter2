const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const btns = document.querySelectorAll('button');
const sizeText = document.querySelector('.size');
const colorInput = document.querySelector('input');

let size = 5;
let color = '';
let isDrawing = false;
sizeText.textContent = 5;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  let x = e.layerX;
  let y = e.layerY;
  ctx.beginPath();
  ctx.moveTo(x, y);
});
canvas.addEventListener('mouseup', (e) => {
  isDrawing = false;
});
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing === false) {
    return;
  } else {
    drawing(e);
  }
});

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.className === 'decrease') {
      sizeDrecease();
    } else if (e.target.className === 'increase') {
      sizeIncrease();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
});
colorInput.addEventListener('change', (e) => {
  console.dir(e.target);
  lineColor(e);
});

function drawing(e) {
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  console.log(color, size);
  let x = e.layerX;
  let y = e.layerY;
  ctx.lineTo(x, y);
  ctx.stroke();
}

function sizeDrecease() {
  if (size <= 1) {
    size = 1;
  } else {
    size = size - 1;
  }
  sizeText.textContent = size;
}
function sizeIncrease() {
  if (size >= 10) {
    size = 10;
  } else {
    size = size + 1;
  }
  sizeText.textContent = size;
}
function lineColor(e) {
  color = e.target.value;
}
