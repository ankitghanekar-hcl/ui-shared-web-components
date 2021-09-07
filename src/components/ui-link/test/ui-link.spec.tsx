import { newSpecPage } from '@stencil/core/testing';
import { UiLink } from '../ui-link';

describe('ui-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiLink],
      html: `<ui-link></ui-link>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-link>
        <mock:shadow-root>
          <a style="font-size: 12px; text-decoration: none; color: #7f28c4; font-weight: 100; font-family: Montserrat,Arial,serif;">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </ui-link>
    `);
  });
});
