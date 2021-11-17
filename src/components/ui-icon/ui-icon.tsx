import { Component, h, Prop } from '@stencil/core';
import { icons } from './icons';

@Component({
  tag: 'ui-icon',
  styleUrl: 'ui-icon.scss',
  shadow: true,
})
export class UiIcon {
  @Prop() icon: string;
  @Prop() color?;
  @Prop() size?;

  get content() {
    return icons[this.icon].content;
  }

  render() {
    return (
      <svg viewBox={icons[this.icon].viewBox} preserveAspectRatio="none" style={{ height: this.size }} color={this.color}>
        {this.content}
      </svg>
    );
  }
}
