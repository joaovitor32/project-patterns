import { Product } from "types";
import Creator from "./Creator";
import ConcreteProduct from "ConcreteProduct";

class ConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

export default ConcreteCreator;
