import { Shape } from "types";
import Circle from "Circle";
import Rectangle from "Rectangle";

class Application {
  shapes = [];
  constructor() {
    const circle = new Circle({ x: 100, y: 100, radius: 200, color: "red" });
    const circle1 = new Circle({ x: 10, y: 10, radius: 20, color: "red" });

    this.shapes.push(circle);
    this.shapes.push(circle1);

    const rectangle = new Rectangle({
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      color: "red",
    });
    const rectangle1 = new Rectangle({
      x: 10,
      y: 10,
      width: 20,
      height: 20,
      color: "blue",
    });
    this.shapes.push(rectangle);
    this.shapes.push(rectangle1);
  }
}

const application = new Application();

const shapes = application.shapes;

shapes.forEach((elem) => console.log(elem));
