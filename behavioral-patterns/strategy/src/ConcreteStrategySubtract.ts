import { Strategy } from 'types';

class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export default ConcreteStrategySubtract;
