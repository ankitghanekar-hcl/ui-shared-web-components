import { r as registerInstance, h } from './index-304a2a43.js';

const topBarCss =
  ':host{display:block;width:100%;max-width:77.5rem}:host .topbar{--font-size:10px;--c-link:#1d1f22;position:relative;z-index:1;display:flex;justify-content:space-between;width:100%;margin:0 auto}:host .topbar .rep{display:flex}';

const TopBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.settings = null;
  }
  render() {
    var _a, _b, _c;
    return h(
      'div',
      { class: 'topbar' },
      h(
        'div',
        { class: 'rep' },
        h('ui-link', { link: '/rep' }, (_a = this.settings) === null || _a === void 0 ? void 0 : _a.findRep),
        h('span', null, '\u00A0|\u00A0'),
        h('ui-link', { link: '#' }, (_b = this.settings) === null || _b === void 0 ? void 0 : _b.becomeRep),
      ),
      h('div', null, h('ui-link', { link: '#' }, (_c = this.settings) === null || _c === void 0 ? void 0 : _c.loginText)),
    );
  }
};
TopBar.style = topBarCss;

export { TopBar as top_bar };
