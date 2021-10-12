import { Circle as CircleType } from "types";
import ShapeClass from "Shape";

class Circle extends ShapeClass {
  radius: number;

  constructor({ radius, x, y, color }: CircleType) {
    super({ x, y, color });
    this.radius = radius;
  }
  static clone() {
    return Object.assign({}, this);
  }
}

export default Circle;
