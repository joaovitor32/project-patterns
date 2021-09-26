import { Product } from "./types";

class ConcreteProduct implements Product {
  public operation(): string {
    return "Concrete product operation call";
  }
}

export default ConcreteProduct;
