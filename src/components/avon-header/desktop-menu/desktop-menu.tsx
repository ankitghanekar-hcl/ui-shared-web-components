import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'desktop-menu',
  styleUrl: 'desktop-menu.scss',
  shadow: true,
})
export class DesktopMenu {
  @Prop() data = null;
  @Prop() settings = null;
  @Prop() cartCount;
  @Prop() wishlistCount;

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
                  <ui-icon icon="heart" size="12" color="#7f28c4" />({this.wishlistCount})Wishlist
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
            <ui-link link="/products" color="rgb(29, 31, 34)">
              <span>Products</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#" color="rgb(29, 31, 34)">
              <span>Quick Shop</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#" color="rgb(29, 31, 34)">
              <span>Offers</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#" color="rgb(29, 31, 34)">
              <span>Avon Loves Blogs</span>
            </ui-link>
          </div>
          <div class="top-nav-link">
            <ui-link link="#" color="rgb(29, 31, 34)">
              <span>REP HUB</span>
            </ui-link>
          </div>
        </div>
        <category-nav categories={this.data}></category-nav>
      </div>
    );
  }
}
