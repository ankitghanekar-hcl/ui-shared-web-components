import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-link',
  styleUrl: 'ui-link.scss',
  shadow: true,
})
export class UiLink {
  /**
   * link
   */
  @Prop() link: string;

  /**
   * color
   */
  @Prop() color?: string;

  /**
   * text-decoration
   */
  @Prop() textdecoration?: string;

  /**
   * font-size
   */
  @Prop() fontsize?: string;

  /**
   * font-family
   */
  @Prop() fontfamily?: string;

  /**
   * font-weight
   */
  @Prop() fontweight?: string;

  /**
   * class
   */
  @Prop() class?: string;

  render() {
    return (
      <a
        class={this.class}
        style={{
          'font-size': this.fontsize,
          'text-decoration': this.textdecoration,
          'color': this.color,
          'font-weight': this.fontweight,
          'font-family': this.fontfamily,
        }}
        href={this.link}
      >
        <slot></slot>
      </a>
    );
  }
}
