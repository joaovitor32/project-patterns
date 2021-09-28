import { ProductB } from "../types";
import ConcreteProductA from "./ProductA";

class ConcreteProductB implements ProductB {
  public functionB(): string {
    return "Product B function call.";
  }
  anotherFunctionB(collaborator: ConcreteProductA): string {
    const result = collaborator.functionA();
    return `The result of the B collaborating with the (${result})`;
  }
}

export default ConcreteProductB;
