import { r as registerInstance, h } from './index-304a2a43.js';

const uiBoxContainerCss = ':host{display:block}';

const UiBox_Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Width
     */
    this.width = '100%';
    /**
     * background-color
     */
    this.backgroundcolor = 'white';
    /**
     * background-color
     */
    this.backgroundimage = '';
    /**
     * height
     */
    this.height = '';
    /**
     * display
     */
    this.display = 'block';
  }
  render() {
    return h(
      'div',
      {
        style: {
          'background-color': this.backgroundcolor,
          'background-image': `url(${this.backgroundimage})`,
          'width': this.width,
          'height': this.height,
          'display': this.display,
        },
      },
      h('slot', null),
    );
  }
};
UiBox_Container.style = uiBoxContainerCss;

export { UiBox_Container as ui_box_container };
