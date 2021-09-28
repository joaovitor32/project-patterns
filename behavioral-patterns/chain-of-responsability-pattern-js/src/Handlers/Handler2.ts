import AbstractHandler from './AbstractHandler';

class Handler2 extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Handler 2') {
      return `Request processed in Handler2.`;
    }
    return super.handle(request);
  }
}

export default Handler2;
