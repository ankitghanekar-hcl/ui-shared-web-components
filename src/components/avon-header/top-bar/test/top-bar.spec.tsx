import { newSpecPage } from '@stencil/core/testing';
import { TopBar } from '../top-bar';

describe('top-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TopBar],
      html: `<top-bar></top-bar>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot.querySelectorAll('ui-link').length).toEqual(3);
  });
});
