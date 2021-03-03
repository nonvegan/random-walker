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
  ctx.globalAlpha = 0.15;
  resetButton.addEventListener("click", reset);
}

function draw() {
  for (let i = 0; i < Math.pow(speedRange.value, 2); i++) {
    walker.draw(ctx);
    update();
  }
  requestAnimationFrame(draw);
}

function update() {
  walker.walk();
}

function reset() {
  ctx.clearRect(0, 0, width, height);
  walker.pos = new Vector(width / 2, height / 2);
}

setup();
draw();
