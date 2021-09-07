import { Component, h, State } from '@stencil/core';
import state, { onChange } from '../../store';

const displayPrice = n => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return format.format(n);
};

@Component({
  tag: 'cart-sidebar',
  styleUrl: 'cart-sidebar.css',
  shadow: true,
})
export class CartSidebar {
  @State() cart;

  componentWillLoad() {
    this.cart = state.cart;
    onChange('cart', value => {
      this.cart = value;
    });
  }
  getTotalPrice() {
    return displayPrice(this.cart.lineItems.reduce((price, item) => price + item.price?.value.centAmount, 0) / 100);
  }

  render() {
    return (
      <ui-modal
        open={state.cartShown}
        closeCallback={() => (state.cartShown = false)}
        buttonlabel={this.cart?.lineItems.length ? 'View Bag' : 'Continue shopping'}
        btncolor="primary"
      >
        <h1 slot="title">Cart</h1>
        {this.cart?.lineItems.length ? (
          <div class="content">
            <h3>Total items: {this.cart?.lineItems.length}</h3>
            {this.cart?.lineItems &&
              this.cart?.lineItems.map(item => (
                <ui-cart_product image={item.variant.images[0].url} heading={item.name} price={displayPrice(item.price?.value.centAmount / 100)}></ui-cart_product>
              ))}
            <h3 class="bottom">Total price: {this.getTotalPrice()}</h3>
          </div>
        ) : (
          <div class="content center">
            <h2>Your cart is empty</h2>
          </div>
        )}
      </ui-modal>
    );
  }
}