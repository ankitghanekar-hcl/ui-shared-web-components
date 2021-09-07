import { newSpecPage } from '@stencil/core/testing';
import { UiImg } from '../ui-img';

describe('ui-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiImg],
      html: `<ui-img></ui-img>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-img>
        <mock:shadow-root>
           <img alt="sample_image" height="100" src="https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg" width="100">
        </mock:shadow-root>
      </ui-img>
    `);
  });
});
