import ConcreteImplementationA from "./ConcreteImplementation/A";
import ConcreteImplementationB from "./ConcreteImplementation/B";
import Abstraction from "./Abstraction";
import ExtendedAbstraction from "./ExtendedAbstraction";

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
console.log(abstraction.operation());

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
console.log(abstraction.operation());
