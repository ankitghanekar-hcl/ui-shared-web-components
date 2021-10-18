import { r as registerInstance, h } from './index-304a2a43.js';

const uiLabelCss = ':host{display:block}';

const UiLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * color
     */
    this.color = 'black';
    /**
     * font-family
     */
    this.fontfamily = 'Arial,serif';
    /**
     * font-size
     */
    this.fontsize = '12px';
    /**
     * font-weight
     */
    this.fontweight = '100';
  }
  render() {
    return h('label', { style: { 'color': this.color, 'font-size': this.fontsize, 'font-family': this.fontfamily, 'font-weight': this.fontweight } }, this.label);
  }
};
UiLabel.style = uiLabelCss;

export { UiLabel as ui_label };
