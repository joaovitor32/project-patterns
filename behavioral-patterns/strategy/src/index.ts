import ConcreteStrategyAdd from 'ConcreteStrategyAdd';
import ConcreteStrategyMultiply from 'ConcreteStrategyMultiply';
import ConcreteStrategySubtract from 'ConcreteStrategySubtract';
import Context from 'Context';

const context = new Context(new ConcreteStrategyAdd());

console.log(context.executeStrategy(1, 3));

context.setStrategy(new ConcreteStrategySubtract());
console.log(context.executeStrategy(1, 3));

context.setStrategy(new ConcreteStrategyMultiply());
console.log(context.executeStrategy(1, 3));
