import { Subscriber, Publisher } from 'types';
import { v4 as uuidv4 } from 'uuid';

import ConcretePublisher from './Publisher';

class ConcreteSubscriber implements Subscriber {
  id: string;

  constructor() {
    this.id = uuidv4();
  }

  // Publisher nesse caso é realmente necessário?
  public update(publisher: Publisher) {
    if (publisher instanceof ConcretePublisher) {
      console.log(`Observer ${this.id}: Reacted to the event.`);
    }
  }
}

export default ConcreteSubscriber;
