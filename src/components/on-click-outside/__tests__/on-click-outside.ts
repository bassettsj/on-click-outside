import {
  OnClickOutsideElement
} from '../on-click-outside';
import { TestWindow } from '@stencil/core/testing';

describe('On Click Outside element', () => {
  let el: HTMLElement;
  let win: TestWindow;
  beforeEach(async () => {
    win = new TestWindow();
    el = await win.load({
      html: '<on-click-outside><p>hi</p></on-click-outside>',
      components: [OnClickOutsideElement],
    });
  });
  test('should be able to render', async () => {
    expect(el).toMatchSnapshot();
  });
  describe('Handle Body Click listener', () => {
    test('it should emit a custom clickoutside event when click targent doesn\'t contain the element', (done) => {
      win.document.querySelector('on-click-outside').addEventListener('clickoutside', (event) => {
        expect(event.type).toBe('clickoutside');
        expect(
          // @ts-ignore
          event.detail
        ).toBeDefined();
        done();
      });
      win.document.body.click();
    });
    test('it should not emit a custom clickoutside event when click target is in the element ', (done) => {
      win.document.querySelector('on-click-outside').addEventListener('clickoutside', (event) => {
        done('Failed!');
      });
      win.document.addEventListener('click', () => {
        setTimeout(() => {
          done();
        }, 0);
      });
      win.document.querySelector('p').click();
    });
  });
});
