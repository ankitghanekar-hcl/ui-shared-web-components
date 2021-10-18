import { r as registerInstance, h } from './index-304a2a43.js';

const uiImgCss = ':host{display:block}';

const UiImg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * src
     */
    this.src = 'https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg';
    /**
     * alt
     */
    this.alt = 'sample_image';
  }
  render() {
    return h('img', { width: this.width, height: this.height, alt: this.alt, src: this.src });
  }
};
UiImg.style = uiImgCss;

export { UiImg as ui_img };
