import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from '../ui-button';

describe('ui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button></ui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-button>
        <mock:shadow-root>
          <button class="MyButton full large primary smallwidth" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </ui-button>
    `);
  });
});
