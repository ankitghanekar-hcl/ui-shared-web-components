import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-label',
  styleUrl: 'ui-label.css',
  shadow: true,
})
export class UiLabel {
  /**
   * Label
   */
  @Prop() label: string;

  /**
   * color
   */
  @Prop() color: string = 'black';

  /**
   * font-family
   */
  @Prop() fontfamily: string = 'Arial,serif';

  /**
   * font-size
   */
  @Prop() fontsize: string = '12px';

  /**
   * font-weight
   */
  @Prop() fontweight: string = '100';

  render() {
    return <label style={{ 'color': this.color, 'font-size': this.fontsize, 'font-family': this.fontfamily, 'font-weight': this.fontweight }}>{this.label}</label>;
  }
}
