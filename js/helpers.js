import { Vector } from "./classes.js";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomInt };
