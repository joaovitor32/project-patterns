import AppError from 'error/AppError';
import { Publisher, Subscriber } from 'types';

class ConcretePublisher implements Publisher {
  public subscribers: Subscriber[] = [];

  attach(subscriber: Subscriber): void {
    const findSubscriber = this.subscribers.includes(subscriber);

    if (findSubscriber) {
      throw new AppError('Ouvinte já incluído');
    }

    this.subscribers.push(subscriber);
  }

  attachMultiple(subscribers: Subscriber[]): void {
    subscribers.forEach(subscriber => {
      const findSubscriber = this.subscribers.includes(subscriber);

      if (findSubscriber) {
        throw new AppError('Ouvinte já incluído');
      }

      this.subscribers.push(subscriber);
    });
  }

  detach(subscriber: Subscriber): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notify(): void {
    this.subscribers.forEach(subscriber => subscriber.update(this));
  }
}

export default ConcretePublisher;
