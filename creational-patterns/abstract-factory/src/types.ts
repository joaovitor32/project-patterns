export interface ProductA {
  functionA(): string;
}

export interface ProductB {
  functionB(): string;
  anotherFunctionB(collaborator: ProductA): string;
}

export interface AbstractFactory<T, K> {
  createProductA(): T;
  createProductB(): K;
}
