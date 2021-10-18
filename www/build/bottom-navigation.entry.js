import { r as registerInstance, h } from './index-304a2a43.js';
import { s as state, o as onChange } from './store-b4f3ba75.js';

const bottomNavigationCss =
  ':host{display:block}@media (min-width: 1024px){:host{display:none}}:host .navigation-bottom{box-sizing:border-box;position:fixed;bottom:0;left:0;z-index:3;display:flex;justify-content:space-around;align-items:flex-end;width:100%;padding:0 1rem;background:#fff;box-shadow:0 -2px 10px rgba(241, 241, 241, 0.15)}:host .label{padding-top:0.25rem;font-size:12px}:host .link{text-align:center;font-size:12px;color:#1d1f22}:host .item{background:transparent;border:0;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0.5rem;position:relative;color:#7f28c4}:host .cart-count{background:#000;color:#fff;font-family:"Roboto";font-size:8px;border-radius:10px;position:absolute;padding:3px 5px;top:2px;left:8px;border:1px solid #fff}';

const BottomNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cartCount = 0;
    this.wishlistCount = 0;
  }
  showCart() {
    state.cartShown = true;
  }
  componentWillLoad() {
    var _a, _b;
    this.cartCount = (_a = state.cart) === null || _a === void 0 ? void 0 : _a.lineItems.length;
    this.wishlistCount = (_b = state.wishlist) === null || _b === void 0 ? void 0 : _b.lineItems.length;
    onChange('cart', value => {
      this.cartCount = value === null || value === void 0 ? void 0 : value.lineItems.length;
    });
    onChange('wishlist', value => {
      this.wishlistCount = value === null || value === void 0 ? void 0 : value.lineItems.length;
    });
  }
  render() {
    return h(
      'div',
      { class: 'navigation-bottom' },
      h('div', { class: 'item' }, h('ui-link', { link: '/', class: 'link' }, h('ui-icon', { icon: 'home', size: '20' }), h('div', { class: 'label' }, 'Home'))),
      h(
        'div',
        { class: 'item' },
        h(
          'ui-button',
          { shape: 'text' },
          this.wishlistCount > 0 && h('span', { class: 'cart-count' }, this.wishlistCount),
          h('ui-icon', { icon: this.wishlistCount ? 'heartFilled' : 'heart', size: '20' }),
          h('div', { class: 'label' }, 'Wishlist'),
        ),
      ),
      h('div', { class: 'item' }, h('ui-button', { shape: 'text' }, h('ui-icon', { icon: 'profile', size: '20', color: '#7f28c4' }), h('div', { class: 'label' }, 'Account'))),
      h(
        'div',
        { class: 'item' },
        h(
          'ui-button',
          { shape: 'text', onClick: this.showCart },
          this.cartCount > 0 && h('span', { class: 'cart-count' }, this.cartCount),
          h('ui-icon', { icon: 'bag', size: '23', color: '#7f28c4' }),
          h('div', { class: 'label' }, 'Basket'),
        ),
      ),
    );
  }
};
BottomNavigation.style = bottomNavigationCss;

export { BottomNavigation as bottom_navigation };
