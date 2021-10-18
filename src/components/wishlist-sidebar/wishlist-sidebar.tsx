import { Component, Event, EventEmitter, h, State } from '@stencil/core';
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

const displayPrice = n => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return format.format(n);
};

@Component({
  tag: 'wishlist-sidebar',
  styleUrl: 'wishlist-sidebar.css',
  shadow: true,
})
export class WishlistSidebar {
  @State() wishlist;

  @Event({
    eventName: 'cart:removeItem',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  removeItem: EventEmitter<LineItem>;
  componentWillLoad() {
    this.wishlist = state.wishlist;
    onChange('wishlist', value => {
      this.wishlist = value;
    });
  }
  getTotalPrice() {
    return displayPrice(this.wishlist.lineItems.reduce((price, item) => price + item.variant.price?.value.centAmount, 0) / 100);
  }

  removeCallback(item: LineItem) {
    this.removeItem.emit(item);
  }

  render() {
    console.log();
    return (
      <ui-modal
        open={state.wishlistShown}
        closeCallback={() => (state.wishlistShown = false)}
        buttonlabel={this.wishlist?.lineItems.length ? 'ADD ALL TO CART' : 'START shopping'}
        btncolor="primary"
        class="cls"
      >
        <h2 slot="title">My Wishlist</h2>
        <p slot="total">
          Total items: <b>{this.wishlist?.lineItems.length}</b>
        </p>
        {/* < div slot="close-button" class="close">
         <h1>&times;</h1>
          </div> */}
        {this.wishlist?.lineItems.length ? (
          <div class="content">
            {/* <h3>Total items: {this.wishlist?.lineItems.length}</h3> */}
            {this.wishlist?.lineItems &&
              this.wishlist?.lineItems.map(item => (
                <ui-cart_product image={item.variant.images[0].url} heading={item.name} price={displayPrice(item.variant.price?.value.centAmount / 100)}>
                  removeCallback={() => this.removeCallback(item)}
                </ui-cart_product>
              ))}
            {/* <h3 class="bottom">Total price: {this.getTotalPrice()}</h3> */}
          </div>
        ) : (
          <div class="content center">
            <h2>Your wishlist is empty</h2>
          </div>
        )}
        {this.wishlist?.lineItems.length && (
          <p slot="bottom" class="bot-button">
            <div class="bottom-price">
              Total price:
              <span class="displaytotal">
                <b>{this.getTotalPrice()}</b>
              </span>
            </div>
          </p>
        )}
        {/* {this.wishlist?.lineItems.length && <p slot="bottom">Total price: {this.getTotalPrice()}</p>} */}
      </ui-modal>
    );
  }
}
