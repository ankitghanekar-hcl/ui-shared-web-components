import { Component, Event, EventEmitter, h, State, Prop } from '@stencil/core';
import 'design-web-components';
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

const priceFormatter = n => {
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
  @Prop() color: string = '#7f28c4';
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
    return (
      <ui-modal
        open={state.cartShown}
        closeCallback={() => (state.cartShown = false)}
        buttonlabel={this.cart?.lineItems.length ? 'View Bag' : 'Continue shopping'}
        btncolor="secondary"
      >
        <h1 slot="title">Mini Cart</h1>
        <p slot="total">
          Total items:<b>{this.cart?.lineItems.length}</b>
        </p>
        {this.cart?.lineItems.length ? (
          <div class="content">
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

        {this.cart?.lineItems.length && (
          <p slot="bottom">
            <div class="bottom-price">
              Total price:
              <span class="displaytotal">
                <b>{this.getTotalPrice()}</b>
              </span>
            </div>
          </p>
        )}
      </ui-modal>
    );
  }
}
