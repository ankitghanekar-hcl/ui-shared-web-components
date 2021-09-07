import { newSpecPage } from '@stencil/core/testing';
import { UiBox_Container } from '../ui-box_container';

describe('ui-box_container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiBox_Container],
      html: `<ui-box_container></ui-box_container>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-box_container>
        <mock:shadow-root>
          <div style="background-color: white; width: 100%; height: 300px;">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </ui-box_container>
    `);
  });
});
