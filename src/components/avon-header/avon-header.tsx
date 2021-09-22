import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
import state, { onChange } from '../../store';
import 'design-web-components';
import 'ui-icons';

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @Prop() content;
  @Prop() data;
  @State() categories;
  @State() settings;
  @State() cartCount = 0;
  @State() wishlistCount = 0;

  @Listen('showCart')
  showCartHandler() {
    state.cartShown = true;
  }

  @Listen('showWishlist')
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
    this.cartCount = cart?.lineItems.length;
    this.wishlistCount = wishlist?.lineItems.length;

    onChange('cart', value => {
      this.cartCount = value?.lineItems.length;
    });
    onChange('wishlist', value => {
      this.wishlistCount = value?.lineItems.length;
    });
  }
  @Watch('data')
  change(val: any) {
    const { cart, wishlist } = val;
    if (cart) state.cart = cart;
    if (wishlist) state.wishlist = wishlist;
  }
  render() {
    return (
      <div>
        <div class="container desktop-only">
          <top-bar settings={this.settings} />
        </div>
        <div class="header-block">
          <div class="smartphone-only">
            <mobile-menu categoryList={this.categories} settings={this.settings} cartCount={this.cartCount} />
          </div>
          <div class="desktop-only">
            <desktop-menu data={this.categories} settings={this.settings} cartCount={this.cartCount} wishlistCount={this.wishlistCount} />
          </div>
        </div>
      </div>
    );
  }
}
