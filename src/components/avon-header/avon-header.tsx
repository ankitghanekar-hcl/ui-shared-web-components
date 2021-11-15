import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
import state, { onChange } from '../../store';
import { getMgnlApp } from 'nextjs-magnolia-connector';
import { ApptusService } from 'ui-utils';
import 'design-web-components';
import 'ui-icons';

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @Prop({ mutable: true, reflect: true }) content;
  @Prop() data;
  @State() categories;
  @State() settings;
  @State() cartCount = 0;
  @State() wishlistCount = 0;

  @Listen('showCart')
  showCartHandler() {
    state.cartShown = true;
  }
  async componentWillLoad() {
    let settings, categories, cart, wishlist;
    if (this.content) {
      const data = JSON.parse(decodeURIComponent(this.content));

      settings = data.settings;
      categories = data.categories;
    } else {
      settings = await getMgnlApp({
        lang: 'en',
        country: 'GB',
        endpoint: 'header',
        site: 'avon',
      });
      categories = await ApptusService.getNavigation();

      this.content = encodeURIComponent(JSON.stringify({ settings, categories }));
    }
    state.cart = cart;
    this.categories = categories;
    this.cartCount = cart?.lineItems.length;
    this.wishlistCount = wishlist?.lineItems.length;
    this.settings = settings;

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
