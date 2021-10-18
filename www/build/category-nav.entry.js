import { r as registerInstance, h } from './index-304a2a43.js';

const categoryNavCss =
  ':host{display:block}:host .category_navigation{--c-link:#1d1f22;--font-size:1rem;display:flex;align-items:center;width:100%;justify-content:center;position:relative;border-top:solid;border-image-slice:1;border-top-width:3px;border-image-source:linear-gradient(to right, #7f28c4 -6%, #e2197c 62%, #e5231b 100%)}:host .category_navigation ul{margin:0;padding:0;width:100%;display:flex;justify-content:center}:host .category_navigation ul li{cursor:pointer;font-size:15px;font-weight:100;color:#999;position:relative;flex:1;padding:12px;text-transform:uppercase;border-bottom:solid;border-bottom-width:1px;border-bottom-color:transparent;text-align:center;list-style:none;font-family:var(--font-family, "Montserrat", sans-serif);transition:0.3s ease}:host .category_navigation ul li:hover{border-bottom-color:#7f28c4;text-decoration:none}:host .mega-menu{--font-size:13px;display:none;position:absolute;background:#fff;z-index:9;top:44px;left:0;box-shadow:0px 11px 20px -11px grey;width:100%;grid-template-columns:20% 80%;grid-template-columns:min-content}:host .mega-menu .subCat{padding:10px 30px;flex-direction:row;flex-wrap:wrap;align-content:flex-start}:host .mega-menu .subCat .heading{color:#000;font-weight:400;padding-bottom:10px}:host .mega-menu .subCat li{flex-basis:calc(23% - 12px);transition:0.5s ease-in;flex:none;padding:1px 5px;width:100%;text-align:left;text-transform:capitalize}:host .mega-menu .subCat li a{font-size:13px;color:var(--c-color-two)}:host .mega-menu .subCat li:hover{border-bottom-color:transparent}:host .mega-menu .subCat li:hover a{color:var(--c-primary)}:host .mega-menu .subCat::after{content:"";flex-grow:1000000000}';

const CategoryNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.categories = [];
    this.childData = [];
    this.hovered = false;
  }
  mouseOver(data, parentSlug) {
    this.childData = data.map(cat => Object.assign(Object.assign({}, cat), { url: `/${parentSlug}/${cat.slug}` }));
    this.hovered = true;
  }
  render() {
    return h(
      'div',
      { class: 'category_navigation' },
      h(
        'ul',
        null,
        this.categories.map(category =>
          h(
            'li',
            { key: category.id, onMouseOver: () => this.mouseOver(category.children, category.slug), onMouseOut: () => (this.hovered = false) },
            h('ui-link', { link: category.slug ? `/c/${category.slug}` : '#' }, h('span', null, category.name)),
          ),
        ),
      ),
      h(
        'div',
        { class: 'mega-menu', style: { display: this.hovered ? 'grid' : 'none' }, onMouseOver: () => (this.hovered = true), onMouseOut: () => (this.hovered = false) },
        h(
          'ul',
          { class: 'subCat' },
          h('li', { class: 'heading' }, 'Categories'),
          this.childData.map(subCat => h('li', { key: subCat.id }, h('ui-link', { link: `/c${subCat.url}` }, h('span', null, subCat.name)))),
        ),
      ),
    );
  }
};
CategoryNav.style = categoryNavCss;

export { CategoryNav as category_nav };
