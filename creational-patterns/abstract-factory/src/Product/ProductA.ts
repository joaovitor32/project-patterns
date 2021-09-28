import { ProductA } from "../types";

class ConcreteProductA implements ProductA {
  public functionA(): string {
    return "Product A function call.";
  }
}

export default ConcreteProductA;
