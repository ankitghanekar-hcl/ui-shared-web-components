import { newSpecPage } from '@stencil/core/testing';
import { MobileMenu } from '../mobile-menu';

describe('mobile-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MobileMenu],
      html: `<mobile-menu></mobile-menu>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot.querySelectorAll('div.topbar').length).toEqual(1);
  });
});
