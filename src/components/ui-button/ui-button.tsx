import { Component, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {
  /**
   *  Button Label
   */
  @Prop() label?: string = '';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() size?: 'large' | 'medium' | 'small' = 'large';
  @Prop() shape?: 'full' | 'round' | 'smooth' | 'text' = 'full';
  @Prop() color?: 'primary' | 'secondary' | 'clear' | 'light' = 'primary';
  @Prop() width?: 'fullwidth' | 'mediumwidth' | 'smallwidth' = 'smallwidth';

  render() {
    return (
      <button type="button" class={clsx(`MyButton  ${this.size} ${this.width} ${this.shape} ${this.color}`)} disabled={this.disabled}>
        {this.label}
        <slot></slot>
      </button>
    );
  }
}
