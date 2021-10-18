import { r as registerInstance, h } from './index-304a2a43.js';

const uiLinkCss =
  ':host{display:block}:host a{color:var(--c-link, #7f28c4);text-decoration:var(--text-decoration, none);font-size:var(--font-size, 0.875rem);font-family:var(--font-family, "Montserrat", sans-serif);font-weight:var(--font-weight, 100)}';

const UiLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * font-family
     */
    this.fontfamily = '';
  }
  render() {
    return h(
      'a',
      {
        class: this.class,
        style: {
          'font-size': this.fontsize,
          'text-decoration': this.textdecoration,
          'color': this.color,
          'font-weight': this.fontweight,
          'font-family': this.fontfamily,
        },
        href: this.link,
      },
      h('slot', null),
    );
  }
};
UiLink.style = uiLinkCss;

export { UiLink as ui_link };
