import { newSpecPage } from '@stencil/core/testing';
import { DesktopMenu } from '../desktop-menu';

describe('desktop-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesktopMenu],
      html: `<desktop-menu></desktop-menu>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot.querySelectorAll('div.header__logo').length).toEqual(1);
    expect(page.root.shadowRoot.querySelectorAll('div.header-actions').length).toEqual(1);
    expect(page.root.shadowRoot.querySelectorAll('div.header-icons').length).toEqual(1);
  });
});
