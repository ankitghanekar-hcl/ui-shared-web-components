import { r as registerInstance, h } from './index-304a2a43.js';

const uiHeadingCss = ':host{display:block}';

const UiHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.level = 'h1';
  }
  render() {
    return this.level === 'h1' ? h('h1', null, this.label) : this.level === 'h2' ? h('h2', null, this.label) : h('h3', null, this.label);
  }
};
UiHeading.style = uiHeadingCss;

export { UiHeading as ui_heading };
