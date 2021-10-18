import { r as registerInstance, h } from './index-304a2a43.js';

const uiTrendingBlockCss = ':host{display:block}.trending_text-block{background-color:rgba(255, 255, 255, 0.178)}';

const UiTrendingBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The label
     */
    this.cardbgimage = 'https://www.shopwithmyrep.co.uk/mediamarket-uk/10104/microsoftteams-image-5_unq_94575c318ac6482f96b42678acc7852e.png';
    this.heading = 'Product Title';
    this.description = 'Trending stories description';
    this.headingptop = '200px';
  }
  render() {
    return h(
      'ui-box_container',
      { style: { display: 'inline-block', position: 'relative' }, width: this.cardwidth, height: this.cardheight, backgroundimage: this.cardbgimage },
      h(
        'ui-box_container',
        { style: { position: 'absolute', bottom: '0', width: '100%' }, width: 'auto', height: 'auto', backgroundcolor: 'rgba(255, 255, 255, 0.66)' },
        h('ui-heading', { label: this.heading, level: 'h2' }),
        h('ui-label', { label: this.description, fontsize: '-0.6rem' }),
      ),
    );
  }
};
UiTrendingBlock.style = uiTrendingBlockCss;

export { UiTrendingBlock as ui_trending_block };
