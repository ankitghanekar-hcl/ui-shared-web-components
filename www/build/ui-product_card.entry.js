import { r as registerInstance, h } from './index-304a2a43.js';

const uiProductCardCss = ':host{display:block}';

const UiProduct_card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The label
     */
    this.image = 'https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg';
    this.imgwidth = '216';
    this.imgheight = '326';
    this.imgalt = 'sample_image';
    this.heading = 'Product Title';
    this.btndisable = false;
    this.btnlabel = 'ADD TO BAG';
    this.price = '0';
  }
  render() {
    return h(
      'ui-box_container',
      { width: this.cardwidth, height: this.cardheight, backgroundcolor: this.cardbgcolor },
      h('ui-img', { src: this.image, width: this.imgwidth, height: this.imgheight, alt: this.imgalt }),
      h('ui-heading', { label: this.heading, level: 'h3' }),
      h('ui-label', { label: `£${this.price}`, fontfamily: 'Montserrat,Arial', fontsize: '1.4rem', color: '#7f28c4' }),
      h('ui-button', { disabled: this.btndisable, color: 'secondary', label: this.btnlabel }),
    );
  }
};
UiProduct_card.style = uiProductCardCss;

export { UiProduct_card as ui_product_card };
