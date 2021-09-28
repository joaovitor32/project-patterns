import ConcreteFactory from "./Factory";

const factory = new ConcreteFactory();
const productA = factory.createProductA();
const productB = factory.createProductB();

console.log(productA.functionA());
console.log(productB.functionB());
