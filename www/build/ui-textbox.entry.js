import { r as registerInstance, h } from './index-304a2a43.js';
import { c as clsx } from './clsx.m-e4a2298a.js';

const uiTextboxCss =
  ':host{display:block}.UiTextbox{width:100%;font-weight:200;cursor:pointer;outline:none;display:flex;}.UiTextbox.fullwidth{width:100%}.UiTextbox.mediumwidth{width:50%}.UiTextbox.smallwidth{display:block;width:20%}.UiTextbox.search{height:30px;background:#fff;border-radius:25px;padding-left:17px;margin-top:6px;border:1px solid #ccc7c7}.UiTextbox.loginform{border-bottom:1px solid black;border-top:none;border-left:none;border-right:none;overflow:hidden;min-width:56px}.UiTextbox.round{border-radius:none;overflow:hidden;min-width:56px}.UiTextbox.elevation{box-shadow:3px 4px 6px rgba(0, 0, 0, 0.3)}';

const UiTextbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.width = 'smallwidth';
    this.shape = 'full';
    this.usecase = 'search';
  }
  render() {
    return h('input', {
      type: 'text',
      class: clsx(`UiTextbox  ${this.width} ${this.shape} ${this.usecase}`),
      placeholder: `${Boolean(this.placeholder) ? this.placeholder : ''}`,
      disabled: this.disabled,
    });
  }
};
UiTextbox.style = uiTextboxCss;

export { UiTextbox as ui_textbox };
