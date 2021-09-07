import { newSpecPage } from '@stencil/core/testing';
import { UiLabel } from '../ui-label';

describe('ui-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiLabel],
      html: `<ui-label></ui-label>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-label>
        <mock:shadow-root>
        <label style="color: black; font-size: 12px; font-family: Arial,serif; font-weight: 100;"></label>
        </mock:shadow-root>
      </ui-label>
    `);
  });
});
