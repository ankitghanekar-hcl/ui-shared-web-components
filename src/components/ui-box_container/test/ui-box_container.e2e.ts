import { newE2EPage } from '@stencil/core/testing';

describe('ui-box_container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-box_container></ui-box_container>');

    const element = await page.find('ui-box_container');
    expect(element).toHaveClass('hydrated');
  });
});
