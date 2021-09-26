import { Product, Creator as CreatorInterface } from "./types";

abstract class Creator implements CreatorInterface<Product> {
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products.
   * */
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export default Creator;
