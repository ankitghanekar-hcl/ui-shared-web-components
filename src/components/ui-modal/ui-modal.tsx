import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

export type ModalEvent = {
  modalId: string;
  payload?: {};
};

@Component({
  tag: 'ui-modal',
  styleUrl: 'ui-modal.scss',
  shadow: true,
})
export class UiModal {
  /**
   * Id
   */
  @Prop() modalId: string;
  /**
   * Heading
   */
  @Prop() modaltitle?: string;

  /**
   * Title color
   */
  @Prop() titlecolor: string = 'black';

  /**
   * Title font-family
   */
  @Prop() titlefontfamily: string = 'Montserrat,Arial';

  /**
   * Title font-size
   */
  @Prop() titlefontsize: string = '18.72px';

  /**
   * Title font-weight
   */
  @Prop() titlefontweight: string = '100';
  /**
   * width
   */
  @Prop() width?: string;
  /**
   * height
   */
  @Prop() height: string = '100%';
  /**
   * Button color
   */
  @Prop() btncolor?: 'primary' | 'secondary' | 'clear' | 'light' = 'secondary';

  /**
   * Position of modal
   */
  @Prop() position?: 'center' | 'left' | 'right' | 'top' | 'bottom' = 'right';
  /**
   * open
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  open: boolean = false;
  /**
   * button-label
   */
  @Prop() buttonlabel: string = 'Go back to shopping';
  /**
   * closeCallback works only in Stencil components
   */
  @Prop() closeCallback?: Function;

  @Event({
    eventName: `modal`,
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  toggle: EventEmitter<ModalEvent>;

  private handleCloseClick = () => {
    this.open = false;
    this.closeCallback && this.closeCallback();
    this.toggle.emit({ modalId: this.modalId });
  };

  private handleBtnClick = () => {
    this.open = false;
    this.closeCallback && this.closeCallback();
    this.toggle.emit({ modalId: this.modalId });
  };

  render() {
    return (
      <div class={this.open ? 'wrapper visible' : 'modal_none'}>
        <div class={`modal ${this.position}`} style={{ width: this.width, height: this.height }}>
          <div class="close">
            <ui-button shape="text" onClick={this.handleCloseClick}>
              <h1>&times;</h1>
            </ui-button>
          </div>
          <div class="title">
            <slot name="title" />
            <span style={{ 'color': this.titlecolor, 'font-weight': this.titlefontweight, 'font-size': this.titlefontsize, 'font-family': this.titlefontfamily }}>
              {this.modaltitle && this.modaltitle}
            </span>
          </div>
          <div class="content">
            <slot />
          </div>
          <div class="button-container">
            <ui-button class="button" color={this.btncolor} width="fullwidth" onClick={this.handleBtnClick}>
              <h3>{this.buttonlabel}</h3>
            </ui-button>
          </div>
        </div>
      </div>
    );
  }
}
