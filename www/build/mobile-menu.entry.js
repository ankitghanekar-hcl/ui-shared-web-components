import { r as registerInstance, e as createEvent, h } from './index-304a2a43.js';

const mobileMenuCss =
  ':host{display:block}:host .header-avon{box-shadow:0px -9px 20px grey;padding-bottom:6px}:host .header-avon .topbar{display:flex;align-items:center;justify-content:space-between;padding:15px 15px 5px 15px}:host .header-avon .topbar .mobile-menu .closeMenu span:nth-child(1){transform:rotate(45deg)}:host .header-avon .topbar .mobile-menu .closeMenu span:nth-child(2){display:none}:host .header-avon .topbar .mobile-menu .closeMenu span:nth-child(3){transform:rotate(135deg);margin-top:-5px;margin-bottom:7px}:host .header-avon .topbar .mobile-menu div span{transition:0.1s ease-in;width:33px;border-top:5px solid black;display:block;margin-top:5px;border-radius:16px}:host .header-avon .topbar .mobile-menu div span:first-child{margin-top:0}:host .header-avon .topbar .mobile-menu div small{font-size:11px;color:#000;font-family:"Montserrat", sans-serif;font-weight:500}:host .header-avon .topbar .account-block{display:grid;position:relative;grid-template-columns:1fr 1fr;align-items:center}:host .header-avon .topbar .account-block .account{margin-right:15px;color:#7f28c4}:host .header-avon .topbar .account-block .cart-bag{--c-button-text:#7f28c4;position:relative}:host .header-avon .topbar .account-block .cart-bag .cart-count{background:#000;color:#fff;font-family:"Roboto";font-size:11px;border-radius:10px;position:absolute;padding:3px 6px;top:-7px;left:-8px;border:1px solid #fff}:host .header-avon .topbar .account-block .account-info{position:absolute;bottom:-11px;left:-13px;grid-column:span 2;font-size:0.7em;font-weight:bold;color:black;font-family:"Montserrat", sans-serif;text-align:left}:host .header-avon aside.smartphone-only{display:flex;background:#fff;justify-content:flex-start;flex-direction:column;width:80%;padding-bottom:50px;min-height:100%;position:absolute;z-index:999;left:-1000px;top:106px;transition:0.3s ease-in;box-shadow:7px 10px 23px -13px grey}:host .header-avon aside.smartphone-only .top_navigation,:host .header-avon aside.smartphone-only .category_navigation{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:25px}:host .header-avon aside.smartphone-only .top_navigation a .chevron_right,:host .header-avon aside.smartphone-only .category_navigation a .chevron_right{float:right}:host .top_navigation{font-family:"Montserrat", sans-serif;display:flex;align-items:center;width:100%;justify-content:center}:host .top_navigation .mobNav{width:100%;padding:0;margin:0}:host .top_navigation .mobNav li{--font-weight:500;--font-size:18px;--c-link:#1d1f22;cursor:pointer;font-size:18px;font-weight:500;color:black;padding:12px 20px;text-transform:uppercase;border-bottom:solid;list-style:none;border-bottom:1px solid #928f8f;line-height:30px;-webkit-tap-highlight-color:transparent}:host .top_navigation .mobNav li:hover{border-bottom-color:#7f28c4;text-decoration:none;color:#7f28c4}:host .top_navigation .mobNav li>.sf-icon{display:inline-block;position:absolute;right:20px}:host .top_navigation .mobNav li a:hover{color:#7f28c4}:host .top_navigation .mobNav__child{transition:0.8s ease-in;padding:0;position:absolute;background:#fff;z-index:999;width:100%;min-height:100%;right:1000px;top:0}:host .top_navigation .mobNav__child .goBackMenu{padding:10px 10px;margin:10px 0px 0px 0px;border-bottom:1px solid black}:host .top_navigation .mobNav__child .goBackMenu .sf-icon{display:inline-block;margin-right:10px}';

const MobileMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showCart = createEvent(this, 'showCart', 7);
    this.categoryList = [];
    this.settings = null;
    this.menuOpen = false;
    this.subMenuToggled = false;
    this.menuLeftPosition = '-1000px';
  }
  toggleMenu() {
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
    var _a;
    return h(
      'div',
      { class: 'header-avon smartphone-only' },
      h(
        'div',
        { class: 'topbar' },
        h(
          'nav',
          null,
          h(
            'div',
            { class: 'mobile-menu' },
            h('div', { onClick: () => this.toggleMenu(), class: { closeMenu: this.menuOpen } }, h('span', null), h('span', null), h('span', null), h('small', null, 'MENU')),
            h(
              'aside',
              { class: 'smartphone-only', style: { left: this.menuLeftPosition } },
              h(
                'div',
                { class: 'top_navigation' },
                h(
                  'ul',
                  { class: 'mobNav', id: 'nav' },
                  this.categoryList.map(category =>
                    h(
                      'li',
                      { key: category.id, onClick: e => this.toggleSubMenu(e) },
                      category.name,
                      ' \u2192',
                      h(
                        'ul',
                        { class: 'mobNav__child' },
                        h('div', { class: 'goBackMenu' }, '\u2190 ', category.name),
                        category.slug && h('li', null, h('ui-link', { link: `/c/${category.slug}` }, 'All ', category.name)),
                        category.children.map(subCategory =>
                          h(
                            'li',
                            { key: subCategory.id },
                            category.slug
                              ? h('ui-link', { link: `/c/${category.slug}/${subCategory.slug}` }, subCategory.name)
                              : h('ui-link', { link: `/c/${subCategory.slug}` }, subCategory.name),
                          ),
                        ),
                      ),
                    ),
                  ),
                  !this.subMenuToggled &&
                    h(
                      'div',
                      null,
                      h('li', null, h('ui-link', { link: '/products' }, 'Products')),
                      h('li', null, h('ui-link', { link: '#' }, 'Quick Shop')),
                      h('li', null, h('ui-link', { link: '#' }, 'Offers')),
                      h('li', null, h('ui-link', { link: '#' }, 'Avon Loves Blogs')),
                      h('li', null, h('ui-link', { link: '#' }, 'REP HUB')),
                    ),
                ),
              ),
            ),
          ),
        ),
        h(
          'div',
          { class: 'logo' },
          h(
            'ui-link',
            { link: '/' },
            h('ui-img', {
              width: '100',
              src: ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.logo) || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png',
            }),
          ),
        ),
        h(
          'div',
          { class: 'account-block' },
          h('div', { class: 'account' }, h('ui-icon', { icon: 'avatarUser', size: '31' })),
          h(
            'div',
            { class: 'cart-bag' },
            h('ui-button', { shape: 'text', onClick: () => this.showCart.emit() }, h('ui-icon', { icon: 'bag', size: '31' })),
            this.cartCount > 0 && h('span', { class: 'cart-count' }, this.cartCount),
          ),
        ),
      ),
      h('search-bar', null),
    );
  }
};
MobileMenu.style = mobileMenuCss;

export { MobileMenu as mobile_menu };
