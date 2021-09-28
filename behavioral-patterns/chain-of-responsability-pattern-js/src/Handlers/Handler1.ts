import AbstractHandler from './AbstractHandler';

class Handler1 extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Handler 1') {
      return `Request processed in Handler1.`;
    }
    return super.handle(request);
  }
}

export default Handler1;
