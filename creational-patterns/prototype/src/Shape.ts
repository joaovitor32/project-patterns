import { Shape, ShapeType } from "types";

abstract class ShapeClass implements Shape<ShapeType> {
  x: number;
  y: number;
  color: string;
  constructor({ x, y, color }: ShapeType) {
    this.x = x || 100;
    this.y = y || 100;
    this.color = color || "black";
  }
  clone(): ShapeType {
    const clone = Object.create(this);
    clone.component = Object.create({
      x: this.x,
      y: this.y,
      color: this.color,
    });

    return clone;
  }
}

export default ShapeClass;
