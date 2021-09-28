import AbstractHandler from './AbstractHandler';

class Handler3 extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Handler 3') {
      return `Request processed in Handler3.`;
    }
    return super.handle(request);
  }
}

export default Handler3;
