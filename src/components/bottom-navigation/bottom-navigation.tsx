import { Component, h, State } from '@stencil/core';
import 'ui-icons';
import state, { onChange } from '../../store';

@Component({
  tag: 'bottom-navigation',
  styleUrl: 'bottom-navigation.scss',
  shadow: true,
})
export class BottomNavigation {
  @State() cartCount = 0;
  @State() wishlistCount = 0;

  showCart() {
    state.cartShown = true;
  }

  componentWillLoad() {
    this.cartCount = state.cart?.lineItems.length;
    this.wishlistCount = state.wishlist?.lineItems.length;

    onChange('cart', value => {
      this.cartCount = value?.lineItems.length;
    });
    onChange('wishlist', value => {
      this.wishlistCount = value?.lineItems.length;
    });
  }
  render() {
    return (
      <div class="navigation-bottom">
        <div class="item">
          <ui-link link="/" class="link">
            <ui-icon icon="home" size="20" />
            <div class="label">Home</div>
          </ui-link>
        </div>
        <div class="item">
          <ui-button shape="text">
            {this.wishlistCount && <span class="cart-count">{this.wishlistCount}</span>}
            <ui-icon icon={this.wishlistCount ? 'heartFilled' : 'heart'} size="20" />
            <div class="label">Wishlist</div>
          </ui-button>
        </div>
        <div class="item">
          <ui-button shape="text">
            <ui-icon icon="profile" size="20" color="#7f28c4" />
            <div class="label">Account</div>
          </ui-button>
        </div>
        <div class="item">
          <ui-button shape="text" onClick={this.showCart}>
            {this.cartCount && <span class="cart-count">{this.cartCount}</span>}
            <ui-icon icon="bag" size="23" color="#7f28c4" />
            <div class="label">Basket</div>
          </ui-button>
        </div>
      </div>
    );
  }
}
