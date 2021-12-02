import { newSpecPage } from '@stencil/core/testing';
import { UiModal } from '../ui-modal';

describe('ui-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiModal],
      html: `<ui-modal></ui-modal>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot.querySelectorAll('div.close').length).toEqual(1);
    expect(page.root.shadowRoot.querySelectorAll('div.title').length).toEqual(1);
    expect(page.root.shadowRoot.querySelectorAll('div.content').length).toEqual(1);
    expect(page.root.shadowRoot.querySelectorAll('div.button-container').length).toEqual(1);
  });
});
