import { newSpecPage } from '@stencil/core/testing';
import { UiHeading } from '../ui-heading';

describe('ui-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiHeading],
      html: `<ui-heading></ui-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-heading>
        <mock:shadow-root>
          <h1></h1>
        </mock:shadow-root>
      </ui-heading>
    `);
  });
});
