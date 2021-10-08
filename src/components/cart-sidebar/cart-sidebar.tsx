import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import 'design-web-components';
import { priceFormatter } from 'ui-utils';
import state, { onChange } from '../../store';

export type LineItem = {
  id: string;
  productId: string;
  name: string;
  price: {
    value: {
      centAmount: number;
    };
  };
  variant: {
    images: { url: string }[];
  };
};

@Component({
  tag: 'cart-sidebar',
  styleUrl: 'cart-sidebar.css',
  shadow: true,
})
export class CartSidebar {
  @State() cart;

  @Event({
    eventName: 'cart:removeItem',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  removeItem: EventEmitter<LineItem>;

  componentWillLoad() {
    this.cart = state.cart;
    onChange('cart', value => {
      this.cart = value;
    });
  }
  private getTotalPrice() {
    return priceFormatter(this.cart.lineItems.reduce((price, item) => price + item.price?.value.centAmount, 0) / 100);
  }

  private removeCallback(item: LineItem) {
    this.removeItem.emit(item);
  }

  render() {
    const closeCallback = () => (state.cartShown = false);
    return (
      <ui-modal open={state.cartShown} closeCallback={closeCallback} buttonlabel={this.cart?.lineItems.length ? 'View Bag' : 'Continue shopping'} btncolor="primary">
        <h1 slot="title">Cart</h1>
        {this.cart?.lineItems.length ? (
          <div class="content">
            <h3>Total items: {this.cart?.lineItems.length}</h3>
            {this.cart?.lineItems &&
              this.cart?.lineItems.map(item => (
                <ui-cart_product
                  image={item.variant.images[0].url}
                  heading={item.name}
                  price={priceFormatter(item.price?.value.centAmount / 100)}
                  removeCallback={() => this.removeCallback(item)}
                />
              ))}
          </div>
        ) : (
          <div class="content center">
            <h2>Your cart is empty</h2>
          </div>
        )}
        {this.cart?.lineItems.length && <h3 slot="bottom">Total price: {this.getTotalPrice()}</h3>}
      </ui-modal>
    );
  }
}
