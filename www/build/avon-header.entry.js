import { r as registerInstance, h } from './index-304a2a43.js';
import { s as state, o as onChange } from './store-b4f3ba75.js';

const avonHeaderCss =
  ':host{display:block;width:100%}.container{padding:0 1.5rem;display:flex;height:2.5rem;align-items:center;justify-content:center;background-color:#f1f2f3}@media (min-width: 1024px){.smartphone-only{display:none !important}}@media (max-width: 1023px){.desktop-only{display:none !important}}';

const AvonHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cartCount = 0;
    this.wishlistCount = 0;
  }
  showCartHandler() {
    state.cartShown = true;
  }
  showWishlistHandler() {
    console.log('asdf');
    state.wishlistShown = true;
  }
  componentWillLoad() {
    let str;
    if (typeof Buffer !== 'undefined') {
      const b = new Buffer(this.content, 'base64');
      str = b.toString('utf8');
    } else str = atob(this.content);
    const { categories, settings, cart, wishlist } = JSON.parse(str);
    state.cart = cart;
    state.wishlist = wishlist;
    this.categories = categories;
    this.settings = settings;
    this.cartCount = cart === null || cart === void 0 ? void 0 : cart.lineItems.length;
    this.wishlistCount = wishlist === null || wishlist === void 0 ? void 0 : wishlist.lineItems.length;
    onChange('cart', value => {
      this.cartCount = value === null || value === void 0 ? void 0 : value.lineItems.length;
    });
    onChange('wishlist', value => {
      this.wishlistCount = value === null || value === void 0 ? void 0 : value.lineItems.length;
    });
  }
  change(val) {
    const { cart, wishlist } = val;
    if (cart) state.cart = cart;
    if (wishlist) state.wishlist = wishlist;
  }
  render() {
    return h(
      'div',
      null,
      h('div', { class: 'container desktop-only' }, h('top-bar', { settings: this.settings })),
      h(
        'div',
        { class: 'header-block' },
        h('div', { class: 'smartphone-only' }, h('mobile-menu', { categoryList: this.categories, settings: this.settings, cartCount: this.cartCount })),
        h('div', { class: 'desktop-only' }, h('desktop-menu', { data: this.categories, settings: this.settings, cartCount: this.cartCount, wishlistCount: this.wishlistCount })),
      ),
    );
  }
  static get watchers() {
    return {
      data: ['change'],
    };
  }
};
AvonHeader.style = avonHeaderCss;

export { AvonHeader as avon_header };
