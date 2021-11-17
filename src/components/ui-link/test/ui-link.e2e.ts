import { newE2EPage } from '@stencil/core/testing';

describe('ui-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-link></ui-link>');

    const element = await page.find('ui-link');
    expect(element).toHaveClass('hydrated');
  });
});
