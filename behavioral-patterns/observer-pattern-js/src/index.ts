import ConcretePublisher from './Publisher';
import ConcreteSubscriber from './Subscriber';

const publisher = new ConcretePublisher();

const subscriber1 = new ConcreteSubscriber();
const subscriber2 = new ConcreteSubscriber();
const subscriber3 = new ConcreteSubscriber();

publisher.attachMultiple([subscriber1, subscriber2, subscriber3]);
publisher.notify();
