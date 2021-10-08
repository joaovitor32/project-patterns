import Director from "./Director";
import ConcreteBuilder from "./ConcreteBuilder";

const director = new Director();
const builder = new ConcreteBuilder();
director.setBuilder(builder);

console.log("Standard basic product:");
director.buildMinimalViableProduct();
builder.getProduct().listParts();

console.log("Standard full featured product:");
director.buildFullFeaturedProduct();
builder.getProduct().listParts();

// Remember, the Builder pattern can be used without a Director class.
console.log("Custom product:");
builder.producePartA();
builder.producePartC();
builder.getProduct().listParts();
