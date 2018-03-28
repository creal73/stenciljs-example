import { flush, render } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyComponent],
        html: '<yohan></yohan>'
      });
    });

    it('should work without parameters', () => {
      // TODO
      console.log(element);
    });
  });
});