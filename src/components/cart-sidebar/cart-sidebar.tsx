import { Component, h, State } from '@stencil/core';
import state, { onChange } from '../../store';
import 'design-web-components';

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
  render() {
    return (
      <ui-modal open={state.cartShown}>
        <h1 slot="title">Cart</h1>
        {this.cart?.lineItems && this.cart?.lineItems.map(item => <ui-cart_product image={item.variant.images[0].url} heading={item.name}></ui-cart_product>)}
      </ui-modal>
    );
  }
}
