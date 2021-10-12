import { Rectangle as RectangleType } from "types";
import ShapeClass from "Shape";

class Rectangle extends ShapeClass {
  width: number;
  height: number;

  constructor({ x, y, width, height, color }: RectangleType) {
    super({ x, y, color });
    this.width = width;
    this.height = height;
    this.color = color;
  }
  static clone() {
    return Object.assign({}, this);
  }
}

export default Rectangle;
