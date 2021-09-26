export interface Publisher {
  attach(subscriber: Subscriber): void;
  attachMultiple(subscriber: Subscriber[]): void;
  detach(subscriber: Subscriber): void;
  notify(): void;
}

export interface Subscriber {
  update(subject: Publisher): void;
}
