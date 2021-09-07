import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-box_container',
  styleUrl: 'ui-box_container.css',
  shadow: true,
})
export class UiBox_Container {
  /**
   * Width
   */
  @Prop() width: string = '100%';

  /**
   * background-color
   */
  @Prop() backgroundcolor: string = 'white';

  /**
   * height
   */
  @Prop() height: string = '300px';

  /**
   * display
   */
  @Prop() display: string = 'block';

  render() {
    return (
      <div style={{ 'background-color': this.backgroundcolor, 'width': this.width, 'height': this.height, 'display': this.display }}>
        <slot />
      </div>
    );
  }
}
