import { Vector, Walker } from "./classes.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const speedRange = document.getElementById("rangeInput");
const resetButton = document.getElementById("resetButton");
const width = Math.round(Math.min(window.innerWidth, window.innerHeight) / 1.6);
const height = Math.round(Math.min(window.innerWidth, window.innerHeight) / 1.6);

const walker = new Walker(new Vector(width / 2, height / 2), new Vector(width, height), 2);

function setup() {
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--fuchsia");
  ctx.globalAlpha = 0.2;
  resetButton.addEventListener("click", reset);
}

function animate() {
  for (let i = 0; i < Math.pow(speedRange.value, 2); i++) {
    draw();
    update();
  }
  requestAnimationFrame(animate);
}

function draw() {
  walker.draw(ctx);
}

function update() {
  walker.walk();
}

function reset() {
  ctx.clearRect(0, 0, width, height);
  walker.pos = new Vector(width / 2, height / 2);
}

setup();
animate();
