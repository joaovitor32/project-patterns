import Target from "./Target";
import Adaptee from "./Adaptee";

import Adapter from "./Adapter";

const target = new Target();
const adaptee = new Adaptee();

target.request();

console.log(
  "Client: The Adaptee class has a weird interface. See, I don't understand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("Client: But I can work with it via the Adapter:");
const adapter = new Adapter(adaptee);
console.log(adapter.request());
