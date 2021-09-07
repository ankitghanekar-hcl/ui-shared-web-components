import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'ui-textbox',
  styleUrl: 'ui-textbox.scss',
  shadow: true,
})
export class UiTextbox {
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() width?: 'fullwidth' | 'mediumwidth' | 'smallwidth' = 'smallwidth';
  @Prop() shape?: 'full' | 'round' | 'smooth' = 'full';
  @Prop() usecase?: 'search' | 'loginform' = 'search';

  render() {
    return (
      <input
        type="text"
        class={clsx(`UiTextbox  ${this.width} ${this.shape} ${this.usecase}`)}
        placeholder={`${Boolean(this.placeholder) ? this.placeholder : ''}`}
        disabled={this.disabled}
      ></input>
    );
  }
}
