import { r as registerInstance, e as createEvent, h } from './index-304a2a43.js';

const desktopMenuCss =
  ':host{display:flex;width:100%;justify-content:center}:host .header{display:flex;box-shadow:1px 12px 15px -16px grey;flex-direction:column;justify-content:center;max-width:976px;width:100%}:host .header__row{padding:0 20px;height:4rem;display:flex;justify-content:center}:host .header__logo{display:flex;align-items:center}:host .header__logoImage{height:2.125rem}:host .header-actions{display:flex;flex:100% 1;align-items:center;justify-content:flex-end}:host .header-icons{position:relative}:host .wishlistHeader{display:flex;position:absolute;right:0;z-index:1}:host .wishlistHeader span{text-transform:uppercase;font-size:11px;font-weight:100;color:#999;font-family:"Montserrat", sans-serif}:host .top_navigation_desk{--c-link:#999;--font-size:12px;font-family:"Montserrat", sans-serif;display:flex;align-items:center;width:100%;justify-content:center;margin-top:20px}:host .top_navigation_desk .top-nav-link{padding:10px 20px;font-size:12px;text-transform:uppercase;font-weight:100;border-bottom:1px solid #fff}:host .top_navigation_desk .top-nav-link:nth-child(3){color:#7f28c4;font-weight:bold}:host .top_navigation_desk .top-nav-link:hover{color:#7f28c4;border-bottom:1px solid #7f28c4}:host .button{box-sizing:border-box;display:flex;align-items:center;justify-content:center;--c-button-padding:0;color:var(--button-color, #fff);transition:background 0.8s;background-position:50%;text-decoration:none;cursor:pointer;border-radius:0;white-space:nowrap;border-width:0;padding:0}:host .buttontext{--button-padding:0;--button-background:transparent;--button-color:$c-text;--c-button-display:inline;display:inline}:host .button-topbar{padding:0 10px;font-size:0.7em;text-decoration:none;display:inline}:host .miniCart{font-size:13px;font-weight:100;color:#7f28c4;font-family:"Montserrat", sans-serif}:host .miniCart .svg_bag{width:31px;margin-right:10px;color:#7f28c4}:host .miniCart .svg_bag .whiteFill{fill:#fff}';

const DesktopMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showCart = createEvent(this, 'showCart', 7);
    this.showWishlist = createEvent(this, 'showWishlist', 7);
    this.data = null;
    this.settings = null;
    this.cartCount = 0;
    this.wishlistCount = 0;
  }
  render() {
    var _a;
    return h(
      'div',
      { class: 'header' },
      h(
        'div',
        { class: 'header__row' },
        h(
          'div',
          { class: 'header__logo' },
          h(
            'a',
            { href: '/' },
            h('img', {
              src: ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.logo) || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png',
              class: 'header__logoImage',
            }),
          ),
        ),
        h(
          'div',
          { class: 'header-actions' },
          h('search-bar', null),
          h(
            'div',
            { class: 'header-icons' },
            h(
              'ui-button',
              { class: 'button', shape: 'text', onClick: () => this.showWishlist.emit() },
              h('div', { class: 'wishlistHeader' }, h('ui-icon', { icon: 'heart', size: '12', color: '#7f28c4' }), h('span', null, '(', this.wishlistCount, ')Wishlist')),
            ),
            h(
              'ui-button',
              { shape: 'text', onClick: () => this.showCart.emit() },
              h('div', { class: 'miniCart' }, h('ui-icon', { icon: 'bag', size: '31' }), '\u00A0\u00A0\u00A0', h('span', null, '(', this.cartCount, ') Shopping Bag')),
            ),
          ),
        ),
      ),
      h(
        'div',
        { class: 'top_navigation_desk' },
        h('div', { class: 'top-nav-link' }, h('ui-link', { link: '/products' }, h('span', null, 'Products'))),
        h('div', { class: 'top-nav-link' }, h('ui-link', { link: '#' }, h('span', null, 'Quick Shop'))),
        h('div', { class: 'top-nav-link' }, h('ui-link', { link: '#' }, h('span', null, 'Offers'))),
        h('div', { class: 'top-nav-link' }, h('ui-link', { link: '#' }, h('span', null, 'Avon Loves Blogs'))),
        h('div', { class: 'top-nav-link' }, h('ui-link', { link: '#' }, h('span', null, 'REP HUB'))),
      ),
      h('category-nav', { categories: this.data }),
    );
  }
};
DesktopMenu.style = desktopMenuCss;

export { DesktopMenu as desktop_menu };
