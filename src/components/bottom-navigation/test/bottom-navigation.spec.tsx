import { newSpecPage } from '@stencil/core/testing';
import { BottomNavigation } from '../bottom-navigation';

describe('bottom-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BottomNavigation],
      html: `<bottom-navigation></bottom-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <bottom-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bottom-navigation>
    `);
  });
});
