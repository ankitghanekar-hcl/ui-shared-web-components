import { newSpecPage } from '@stencil/core/testing';
import { UiTrendingBlock } from '../ui-trending-block';

describe('ui-trending-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiTrendingBlock],
      html: `<ui-trending-block></ui-trending-block>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-trending-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-trending-block>
    `);
  });
});
