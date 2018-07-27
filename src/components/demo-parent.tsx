import {
  Component,
  State,
} from '@stencil/core';

@Component({
  tag: 'demo-parent',
})
export class Demo {
  @State() isOpen: boolean = true;
  close = () => {
    this.isOpen = false;
  };
  open = () => {
    this.isOpen = true;
  };
  render() {
    return (
    <div>
      <on-click-outside onClickoutside={this.close}>
        <dialog open={this.isOpen}>
          <p>
            Dialog content!
          </p>
        </dialog>
        <button onClick={this.open}>
          Show the Modal
        </button>
      </on-click-outside>
    </div>
    );
  }
}
