import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.scss',
  shadow: true,
})
export class MobileMenu {
  @Prop() categoryList = [];
  @Prop() settings = null;
  @State() menuOpen = false;
  @State() subMenuToggle = false;
  @State() menuLeftPosition = '-1000px';

  private toggleMenu() {
    this.menuLeftPosition = !this.menuOpen ? '0px' : '-1000px';
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(e) {
    let targetNode;
    if (e.target.nodeName == 'svg') targetNode = e.target.parentElement.parentElement;
    else targetNode = e.target;
    let target = targetNode.childNodes[3];
    if (typeof target != 'undefined') {
      target.style.right = this.subMenuToggle ? '1000px' : '0px';
      this.subMenuToggle = !this.subMenuToggle;
    } else {
      targetNode.parentElement.style.right = '1000px';
      this.subMenuToggle = false;
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
                      <li class="mobNav__parent" key={category.id} onClick={e => this.toggleSubMenu(e)}>
                        {category.name} &rarr;
                        <ul class="mobNav__child">
                          <div class="goBackMenu">&larr; {category.name}</div>
                          {category.slug && (
                            <li>
                              <avon-link link={`/c/${category.slug}`}>All {category.name}</avon-link>
                            </li>
                          )}
                          {category.children.map(subCategory => (
                            <li key={subCategory.id}>
                              {category.slug ? (
                                <avon-link link={`/c/${category.slug}/${subCategory.slug}`}>{subCategory.name}</avon-link>
                              ) : (
                                <avon-link link={`/c/${subCategory.slug}`}>{subCategory.name}</avon-link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                {!this.subMenuToggle && (
                  <div class="top_navigation_desk">
                    <div class="top-nav-link">
                      <avon-link link="/products">Products</avon-link>
                    </div>
                    <div class="top-nav-link">
                      <avon-link link="#">Quick Shop</avon-link>
                    </div>
                    <div class="top-nav-link">
                      <avon-link link="#">Offers</avon-link>
                    </div>
                    <div class="top-nav-link">
                      <avon-link link="#">Avon Loves Blogs</avon-link>
                    </div>
                    <div class="top-nav-link">
                      <avon-link link="#">REP HUB</avon-link>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </nav>
          <div class="logo">
            <a href="/">
              <img src={this.settings.logo || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png'} class="header__logoImage" />
            </a>
          </div>
          <div class="account-block">
            <div class="account">
              <ui-icon icon="avatarUser" size="31" />
            </div>
            <div class="cart-bag">
              <ui-link link="/cart">
                <ui-icon icon="bag" size="31" />
              </ui-link>
              <span class="cart-count">1</span>
            </div>
          </div>
        </div>
        <search-bar />
      </div>
    );
  }
}
