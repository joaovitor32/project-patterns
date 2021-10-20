import { Strategy } from 'types';

class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export default ConcreteStrategyAdd;
