import { newSpecPage } from '@stencil/core/testing';
import { UiTextbox } from '../ui-textbox';

describe('ui-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiTextbox],
      html: `<ui-textbox></ui-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-textbox>
        <mock:shadow-root>
           <input class="UiTextbox full search smallwidth" placeholder="" type="text">
        </mock:shadow-root>
      </ui-textbox>
    `);
  });
});
