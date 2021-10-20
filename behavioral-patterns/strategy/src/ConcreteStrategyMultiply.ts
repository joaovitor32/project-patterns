import { Strategy } from 'types';

class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export default ConcreteStrategyMultiply;
