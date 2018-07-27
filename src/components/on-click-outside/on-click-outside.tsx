import {
  Component,
  EventEmitter,
  Event,
  Element,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'on-click-outside',
})
export class OnClickOutsideElement {
  @Element() el: HTMLElement;
  @Event() clickoutside: EventEmitter<{ sourceEvent: Event }>;
  constructor() {
    this.onClickBody = this.onClickBody.bind(this);
  }

  @Listen('body:click')
  onClickBody(event: Event & { target: HTMLElement}) {
    if (!this.el.contains(event.target)) {
      this.clickoutside.emit({ sourceEvent: event });
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
