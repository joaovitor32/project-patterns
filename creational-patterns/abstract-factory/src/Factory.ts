import { ConcreteProductA, ConcreteProductB } from "./Product";
import { AbstractFactory, ProductA, ProductB } from "./types";

class ConcreteFactory implements AbstractFactory<ProductA, ProductB> {
  public createProductA(): ProductA {
    return new ConcreteProductA();
  }

  public createProductB(): ProductB {
    return new ConcreteProductB();
  }
}

export default ConcreteFactory;
