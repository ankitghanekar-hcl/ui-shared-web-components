import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-link',
  styleUrl: 'ui-link.css',
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
  @Prop() color: string = '#7f28c4';

  /**
   * text-decoration
   */
  @Prop() textdecoration: string = 'none';

  /**
   * font-size
   */
  @Prop() fontsize: string = '12px';

  /**
   * font-family
   */
  @Prop() fontfamily: string = 'Montserrat,Arial,serif';

  /**
   * font-weight
   */
  @Prop() fontweight: string = '100';

  /**
   * class
   */
  @Prop() class: string;

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
