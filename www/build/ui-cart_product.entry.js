import { r as registerInstance, h } from './index-304a2a43.js';

const uiCartProductCss =
  ':host{display:block}.product{display:flex;align-items:center;position:relative;height:350px}.product:hover{box-shadow:0px 0px 2px 2px rgba(0, 0, 0, 0.2)}.link{color:#1d1f22;font-size:1rem}h2{color:#7f28c4}.remove{position:absolute;top:1rem;right:0.5rem}h1{color:white}';

const UiCartProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * image width
     */
    this.imgwidth = '180';
    /**
     * image height
     */
    this.imgheight = '200';
    /**
     * image alt
     */
    this.imgalt = 'src_eg';
    /**
     * titlecolor
     */
    this.titlecolor = '#43464E';
    /**
     * title fontsize
     */
    this.titlefontsize = '16px';
    /**
     * title fontfamily
     */
    this.titlefontfamily = 'Montserrat,sans-serif';
    /**
     * box width
     */
    this.boxwidth = '300';
    /**
     * box height
     */
    this.boxheight = '300';
    /**
     * box bgcolor
     */
    this.boxbgcolor = 'white';
    this.handleRemoveClick = () => {
      this.removeCallback && this.removeCallback();
    };
  }
  render() {
    return h(
      'div',
      { class: 'product' },
      h('div', { class: 'img' }, h('ui-img', { src: this.image, width: this.imgwidth, height: this.imgheight, alt: this.imgalt })),
      h('div', { class: 'title' }, h('ui-link', { link: this.link }, h('span', { class: 'link' }, this.heading)), h('h2', null, this.price)),
      h('ui-button', { class: 'remove', shape: 'text', onClick: this.handleRemoveClick }, h('h1', null, '\u00D7')),
    );
  }
};
UiCartProduct.style = uiCartProductCss;

export { UiCartProduct as ui_cart_product };
