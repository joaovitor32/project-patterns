/**
 * The Product interface declares the operations that all objects of type product must
 * implement.
 */
export interface Product {
  operation(): string;
}

export interface Creator<T> {
  factoryMethod(): T;
  someOperation(): string;
}
