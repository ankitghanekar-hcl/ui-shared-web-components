import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';
import 'design-web-components';

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.scss',
  shadow: true,
})
export class MobileMenu {
  @Prop() categoryList = [];
  @Prop() settings = null;
  @Prop() cartCount;
  @State() menuOpen = false;
  @State() subMenuToggled = false;
  @State() menuLeftPosition = '-1000px';

  @Event({
    eventName: 'showCart',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  showCart: EventEmitter<void>;

  private toggleMenu() {
    this.menuLeftPosition = !this.menuOpen ? '0px' : '-1000px';
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(e) {
    let targetNode;
    targetNode = e.target;
    let target = targetNode.childNodes[1];
    if (typeof target != 'undefined') {
      target.style.right = this.subMenuToggled ? '1000px' : '0px';
      this.subMenuToggled = !this.subMenuToggled;
    } else {
      targetNode.parentElement.style.right = '1000px';
      this.subMenuToggled = false;
    }
  }

  render() {
    return (
      <div class="header-avon smartphone-only">
        <div class="topbar">
          <nav>
            <div class="mobile-menu">
              <div onClick={() => this.toggleMenu()} class={{ closeMenu: this.menuOpen }}>
                <span></span>
                <span></span>
                <span></span>
                <small>MENU</small>
              </div>
              <aside class="smartphone-only" style={{ left: this.menuLeftPosition }}>
                <div class="top_navigation">
                  <ul class="mobNav" id="nav">
                    {this.categoryList.map(category => (
                      <li key={category.id} onClick={e => this.toggleSubMenu(e)}>
                        {category.name} &rarr;
                        <ul class="mobNav__child">
                          <div class="goBackMenu">&larr; {category.name}</div>
                          {category.slug && (
                            <li>
                              <ui-link link={`/c/${category.slug}`}>All {category.name}</ui-link>
                            </li>
                          )}
                          {category.children.map(subCategory => (
                            <li key={subCategory.id}>
                              {category.slug ? (
                                <ui-link link={`/c/${category.slug}/${subCategory.slug}`}>{subCategory.name}</ui-link>
                              ) : (
                                <ui-link link={`/c/${subCategory.slug}`}>{subCategory.name}</ui-link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    {!this.subMenuToggled && (
                      <div>
                        <li>
                          <ui-link link="/products">Products</ui-link>
                        </li>
                        <li>
                          <ui-link link="#">Quick Shop</ui-link>
                        </li>
                        <li>
                          <ui-link link="#">Offers</ui-link>
                        </li>
                        <li>
                          <ui-link link="#">Avon Loves Blogs</ui-link>
                        </li>
                        <li>
                          <ui-link link="#">REP HUB</ui-link>
                        </li>
                      </div>
                    )}
                  </ul>
                </div>
              </aside>
            </div>
          </nav>
          <div class="logo">
            <ui-link link="/">
              <ui-img width="100" src={this.settings?.logo || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png'} />
            </ui-link>
          </div>
          <div class="account-block">
            <div class="account">
              <ui-icon icon="avatarUser" size="31" />
            </div>
            <div class="cart-bag">
              <ui-button shape="text" onClick={() => this.showCart.emit()}>
                <ui-icon icon="bag" size="31" />
              </ui-button>
              {this.cartCount > 0 && <span class="cart-count">{this.cartCount}</span>}
            </div>
          </div>
        </div>
        <search-bar />
      </div>
    );
  }
}
