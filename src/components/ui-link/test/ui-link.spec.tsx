import { newSpecPage } from '@stencil/core/testing';
import { UiLink } from '../ui-link';

describe('ui-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiLink],
      html: `<ui-link fontsize="12px"></ui-link>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot).toEqualHtml(`
          <a style="font-size: 12px;">
            <slot></slot>
          </a>
    `);
  });
});
