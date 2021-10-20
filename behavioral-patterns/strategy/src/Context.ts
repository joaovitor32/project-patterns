import { Strategy } from 'types';

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number) {
    return this.strategy.execute(a, b);
  }
}

export default Context;
