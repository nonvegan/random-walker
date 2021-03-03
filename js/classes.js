import { randomInt } from "./helpers.js";

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
}

class Walker {
  constructor(pos, bounds, size) {
    this.pos = pos;
    this.bounds = bounds;
    this.size = size;
  }
  draw(ctx) {
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }

  walk() {
    switch (randomInt(0, 3)) {
      case 0:
        this.pos.add(new Vector(0, this.size));
        break;
      case 1:
        this.pos.add(new Vector(this.size, 0));
        break;
      case 2:
        this.pos.add(new Vector(-this.size, 0));
        break;
      case 3:
        this.pos.add(new Vector(0, -this.size));
        break;
    }

    if (this.pos.x < 0) {
      this.pos.x = this.bounds.x - this.size;
    }
    if (this.pos.x > this.bounds.x - this.size) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = this.bounds.y - this.size;
    }
    if (this.pos.y > this.bounds.y - this.size) {
      this.pos.y = 0;
    }
  }
}

export { Vector, Walker };
