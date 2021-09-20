import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import 'design-web-components';

@Component({
  tag: 'desktop-menu',
  styleUrl: 'desktop-menu.scss',
  shadow: true,
})
export class DesktopMenu {
  @Prop() data = null;
  @Prop() settings = null;
  @Prop() cartCount = 0;
  @Prop() wishlistCount = 0;

  @Event({
    eventName: 'showCart',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  showCart: EventEmitter<void>;

  render() {
    return (
      <div class="header">
        <div class="header__row">
          <div class="header__logo">
            <a href="/">
              <img src={this.settings?.logo || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png'} class="header__logoImage" />
            </a>
          </div>
          <div class="header-actions">
            <search-bar></search-bar>
            <div class="header-icons">
              <ui-button class="wishlistHeader" shape="text">
                <span>
                  <ui-icon icon={this.wishlistCount ? 'heartFilled' : 'heart'} size="12" />({this.wishlistCount})Wishlist
                </span>
              </ui-button>
              <ui-button shape="text" onClick={() => this.showCart.emit()}>
                <div class="miniCart">
                  <ui-icon icon="bag" size="31" />
                  &nbsp;&nbsp;&nbsp;
                  <span>({this.cartCount}) Shopping Bag</span>
                </div>
              </ui-button>
            </div>
          </div>
        </div>
        <div class="top_navigation_desk">
          <div class="top-nav-link">
            <ui-link link="/products">
              <span>Products</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#">
              <span>Quick Shop</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#">
              <span>Offers</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#">
              <span>Avon Loves Blogs</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#">
              <span>REP HUB</span>
            </ui-link>
          </div>
        </div>
        <category-nav categories={this.data}></category-nav>
      </div>
    );
  }
}
