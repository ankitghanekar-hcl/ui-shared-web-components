import { newE2EPage } from '@stencil/core/testing';

describe('ui-trending-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-trending-block></ui-trending-block>');

    const element = await page.find('ui-trending-block');
    expect(element).toHaveClass('hydrated');
  });
});
