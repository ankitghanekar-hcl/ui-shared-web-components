import { r as registerInstance, e as createEvent, h } from './index-304a2a43.js';
import { s as state, o as onChange } from './store-b4f3ba75.js';

const cartSidebarCss =
  ':host{display:block}.close{background-color:#7f28c4;min-width:50px;height:50px;border-radius:50%}.close h1{color:white;padding:10px}.cls{--c-button-text:white;--c-button-background:#7f28c4;--c-button-border-radius:50%;--c-button-min-width:50px;--c-button-height:50px;--c-button-padding:10px;--c-button-display:0}.content{height:80%;overflow:scroll;display:flex;flex-direction:column}.content::-webkit-scrollbar{display:none}.content center{display:flex;justify-content:center;}.bottom-price{display:flex;justify-content:space-between}.bottom-price .displaytotal{color:#7f28c4}.bottom{margin-top:auto;display:inline-block;width:100%}.button-text{color:white}.close{--c-button-text:blue}';

const priceFormatter = n => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format.format(n);
};
const CartSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeItem = createEvent(this, 'cart:removeItem', 7);
    this.color = '#7f28c4';
  }
  componentWillLoad() {
    this.cart = state.cart;
    onChange('cart', value => {
      this.cart = value;
    });
  }
  getTotalPrice() {
    return priceFormatter(
      this.cart.lineItems.reduce((price, item) => {
        var _a;
        return price + ((_a = item.price) === null || _a === void 0 ? void 0 : _a.value.centAmount);
      }, 0) / 100,
    );
  }
  removeCallback(item) {
    this.removeItem.emit(item);
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return h(
      'ui-modal',
      {
        open: state.cartShown,
        closeCallback: () => (state.cartShown = false),
        buttonlabel: ((_a = this.cart) === null || _a === void 0 ? void 0 : _a.lineItems.length) ? 'View Bag' : 'Continue shopping',
        btncolor: 'secondary',
        class: 'cls',
      },
      h('h1', { slot: 'title' }, 'Mini Cart'),
      h('p', { slot: 'total' }, 'Total items:', h('b', null, (_b = this.cart) === null || _b === void 0 ? void 0 : _b.lineItems.length)),
      ((_c = this.cart) === null || _c === void 0 ? void 0 : _c.lineItems.length)
        ? h(
            'div',
            { class: 'content' },
            ((_d = this.cart) === null || _d === void 0 ? void 0 : _d.lineItems) &&
              ((_e = this.cart) === null || _e === void 0
                ? void 0
                : _e.lineItems.map(item => {
                    var _a;
                    return h('ui-cart_product', {
                      image: item.variant.images[0].url,
                      heading: item.name,
                      price: priceFormatter(((_a = item.price) === null || _a === void 0 ? void 0 : _a.value.centAmount) / 100),
                      removeCallback: () => this.removeCallback(item),
                    });
                  })),
          )
        : h('div', { class: 'content center' }, h('h2', null, 'Your cart is empty')),
      ((_f = this.cart) === null || _f === void 0 ? void 0 : _f.lineItems.length) &&
        h('p', { slot: 'bottom' }, h('div', { class: 'bottom-price' }, 'Total price:', h('span', { class: 'displaytotal' }, h('b', null, this.getTotalPrice())))),
    );
  }
};
CartSidebar.style = cartSidebarCss;

export { CartSidebar as cart_sidebar };
