import { Handler1, Handler2, Handler3 } from 'Handlers';

const requests = ['Handler 3', 'Handler2', 'Handler3'];

const handler1 = new Handler1();
const handler2 = new Handler2();
const handler3 = new Handler3();

handler1.setNext(handler2).setNext(handler3);

requests.forEach(req => {
  const result = handler1.handle(req);
  if (result) {
    console.log(`${req} - ${result}`);
  } else {
    console.log(`Request: ${req} is untouched`);
  }
});
