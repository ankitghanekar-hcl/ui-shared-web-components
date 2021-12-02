import { newSpecPage } from '@stencil/core/testing';
import { UiImg } from '../ui-img';

describe('ui-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiImg],
      html: `<ui-img height="100" alt="sample_image" src="https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg"></ui-img>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot).toEqualHtml(`
      <img alt="sample_image" height="100" src="https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg" />
    `);
  });
});
