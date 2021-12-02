import { newSpecPage } from '@stencil/core/testing';
import { BottomNavigation } from '../bottom-navigation';

describe('bottom-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BottomNavigation],
      html: `<bottom-navigation></bottom-navigation>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot.querySelectorAll('div.item').length).toEqual(4);
  });
});
