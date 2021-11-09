import { r as registerInstance, h } from './index-304a2a43.js';
import { c as clsx } from './clsx.m-e4a2298a.js';

const uiButtonCss =
  ':host{display:block}.blue{width:100%;font-weight:600;cursor:pointer;outline:none;display:flex;justify-content:center;align-items:center;background:#1b8df2 0% 0% no-repeat padding-box;border:none;color:white}.MyButton{width:100%;font-weight:800;cursor:pointer;outline:none;display:flex;justify-content:center;align-items:center;}.MyButton.large{padding:12px}.MyButton.medium{padding:8px}.MyButton.small{padding:4px}.MyButton.fullwidth{width:100%}.MyButton.mediumwidth{width:50%}.MyButton.smallwidth{width:25%}.MyButton.primary{background:black 0 0 no-repeat padding-box;background:var(--c-background, black 0 0 no-repeat padding-box);border:none;color:white;transition:0.3s}.MyButton.primary:hover,.MyButton.primary:focus{background-color:#c;box-shadow:3px 4px 6px #a3a3a3}.MyButton.primary:active{background-color:black;box-shadow:3px 4px 6px #a3a3a3}.MyButton.primary:disabled{background-color:#d6d6d6;color:#a3a3a3;cursor:not-allowed;box-shadow:none}.MyButton.secondary{background:#7f28c4;border:none;color:white;transition:0.3s}.MyButton.secondary:hover,.MyButton.secondary:focus{background-color:#6a17ad;color:white}.MyButton.secondary:active{background-color:#7f28c4;color:#45a3f5}.MyButton.secondary:disabled{border-color:#d6d6d6;color:#a3a3a3;background-color:#f7f7f7;cursor:not-allowed}.MyButton.clear{background:none;border:#7f28c4 1px solid;color:#7f28c4;transition:0.3s}.MyButton.clear:hover,.MyButton.clear:focus{box-shadow:3px 4px 6px #a3a3a3}.MyButton.clear:active{background-color:none;box-shadow:3px 4px 6px #a3a3a3}.MyButton.clear:disabled{background-color:#d6d6d6;color:#a3a3a3;cursor:not-allowed;box-shadow:none}.MyButton.light{background:none;border:black 1px solid;color:black;transition:0.3s}.MyButton.light:hover,.MyButton.light:focus{box-shadow:3px 4px 6px #a3a3a3}.MyButton.light:active{box-shadow:3px 4px 6px #a3a3a3}.MyButton.light:disabled{background-color:#d6d6d6;color:#a3a3a3;cursor:not-allowed;box-shadow:none}.MyButton.full{border-radius:none}.MyButton.round{border-radius:50%;overflow:hidden;min-width:50px;height:50px}.MyButton.smooth{border-radius:4px}.MyButton.text{font-weight:normal;background:transparent;color:var(--c-button-text, #1d1f22);padding:var(--c-button-padding, 10px);background:var(--c-button-background, transparent);border-radius:var(--c-button-border-radius, none);width:var(--c-button-min-width, auto);height:var(--c-button-height, 2);padding:0}.MyButton.text:hover,.MyButton.text:focus{color:#7f28c4;background-color:#fff;box-shadow:none}.MyButton.elevation{box-shadow:3px 4px 6px rgba(0, 0, 0, 0.3)}';

const UiButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *  Button Label
     */
    this.label = '';
    this.disabled = false;
    this.size = 'large';
    this.shape = 'full';
    this.color = 'primary';
    this.width = 'smallwidth';
  }
  render() {
    return h('button', { type: 'button', class: clsx(`MyButton  ${this.size} ${this.width} ${this.shape} ${this.color}`), disabled: this.disabled }, this.label, h('slot', null));
  }
};
UiButton.style = uiButtonCss;

export { UiButton as ui_button };
