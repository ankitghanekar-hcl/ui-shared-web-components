import { newSpecPage } from '@stencil/core/testing';
import { UiIcon } from '../ui-icon';

describe('ui-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiIcon],
      html: `<ui-icon icon="search"></ui-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-icon icon="search">
        <mock:shadow-root>
          <svg preserveAspectRatio="none" viewBox="0 0 21 21">
            <g>
              <path d="M 14.191406 11.591797 C 13.485557 12.733817 12.481665 13.665817 11.28125 14.28125 L 17.099609 20.099609 C 17.499609 20.499609 18 20.699219 18.5 20.699219 C 19 20.699219 19.500391 20.499609 19.900391 20.099609 C 20.700391 19.299609 20.700391 18.100781 19.900391 17.300781 L 14.191406 11.591797 z " fill="currentColor"></path>
              <path d="M7.9,3.3c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4S5.5,3.3,7.9,3.3 M7.9,0.3   c-4.1,0-7.4,3.3-7.4,7.4l0,0c0,4.1,3.3,7.4,7.4,7.4s7.4-3.3,7.4-7.4l0,0C15.3,3.6,12,0.3,7.9,0.3L7.9,0.3z" fill="currentColor"></path>
            </g>
          </svg>
        </mock:shadow-root>
      </ui-icon>
    `);
  });
});
