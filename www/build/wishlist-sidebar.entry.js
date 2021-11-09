import { r as registerInstance, e as createEvent, h } from './index-304a2a43.js';
import { s as state, o as onChange } from './store-b4f3ba75.js';

const wishlistSidebarCss =
  ':host{display:block}.close{--c-button-text:red;color:#7f28c4;}.cls{--c-button-background:#e2197c;--c-button-text:white;--c-button-border-radius:50%;--c-button-display:0;--c-button-min-width:50px;--c-button-height:50px}.content{height:80%;overflow:scroll;display:flex;flex-direction:column;}.content::-webkit-scrollbar{display:none}.content center{display:flex;justify-content:center;}.ToCart{background-color:red}.AddToCart{--c-button-background:white;--c-button-border-radius:none;--c-button-min-width:100%;--c-button-text:black}.bottom-price{display:flex;justify-content:space-between}.bottom-price .displaytotal{color:#7f28c4}.bottom{margin-top:auto;display:inline-block;width:100%}.bot-button{--c-button-background:black}';

const displayPrice = n => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format.format(n);
};
const WishlistSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeItem = createEvent(this, 'cart:removeItem', 7);
  }
  componentWillLoad() {
    this.wishlist = state.wishlist;
    onChange('wishlist', value => {
      this.wishlist = value;
    });
  }
  getTotalPrice() {
    return displayPrice(
      this.wishlist.lineItems.reduce((price, item) => {
        var _a;
        return price + ((_a = item.variant.price) === null || _a === void 0 ? void 0 : _a.value.centAmount);
      }, 0) / 100,
    );
  }
  removeCallback(item) {
    this.removeItem.emit(item);
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    console.log();
    return h(
      'ui-modal',
      {
        open: state.wishlistShown,
        closeCallback: () => (state.wishlistShown = false),
        buttonlabel: ((_a = this.wishlist) === null || _a === void 0 ? void 0 : _a.lineItems.length) ? 'ADD ALL TO CART' : 'START shopping',
        btncolor: 'primary',
        class: 'cls',
      },
      h('h2', { slot: 'title' }, 'My Wishlist'),
      h('p', { slot: 'total' }, 'Total items: ', h('b', null, (_b = this.wishlist) === null || _b === void 0 ? void 0 : _b.lineItems.length)),
      ((_c = this.wishlist) === null || _c === void 0 ? void 0 : _c.lineItems.length)
        ? h(
            'div',
            { class: 'content' },
            ((_d = this.wishlist) === null || _d === void 0 ? void 0 : _d.lineItems) &&
              ((_e = this.wishlist) === null || _e === void 0
                ? void 0
                : _e.lineItems.map(item => {
                    var _a;
                    return h(
                      'ui-cart_product',
                      {
                        image: item.variant.images[0].url,
                        heading: item.name,
                        price: displayPrice(((_a = item.variant.price) === null || _a === void 0 ? void 0 : _a.value.centAmount) / 100),
                      },
                      'removeCallback=',
                      () => this.removeCallback(item),
                      h(
                        'p',
                        { slot: 'ToCart', class: 'ToCart' },
                        h('ui-button', { class: 'AddToCart', shape: 'text', onClick: this.removeCallback }, h('h2', null, h('u', null, 'Add to Cart'))),
                      ),
                    );
                  })),
          )
        : h('div', { class: 'content center' }, h('h2', null, 'Your wishlist is empty')),
      ((_f = this.wishlist) === null || _f === void 0 ? void 0 : _f.lineItems.length) &&
        h(
          'p',
          { slot: 'bottom', class: 'bot-button' },
          h('div', { class: 'bottom-price' }, 'Total price:', h('span', { class: 'displaytotal' }, h('b', null, this.getTotalPrice()))),
        ),
    );
  }
};
WishlistSidebar.style = wishlistSidebarCss;

export { WishlistSidebar as wishlist_sidebar };
