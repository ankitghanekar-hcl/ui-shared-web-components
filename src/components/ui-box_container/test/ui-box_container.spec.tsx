import { newSpecPage } from '@stencil/core/testing';
import { UiBox_Container } from '../ui-box_container';

describe('ui-box_container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiBox_Container],
      html: `<ui-box_container backgroundcolor="white" width="100%" height="300px"></ui-box_container>`,
      supportsShadowDom: true,
    });
    expect(page.root.shadowRoot).toEqualHtml(`
          <div style="background-color: white; background-image: url(); width: 100%; height: 300px;  display: block;">
            <slot></slot>
          </div>
    `);
  });
});
