import { newE2EPage } from '@stencil/core/testing';

describe('bottom-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bottom-navigation></bottom-navigation>');

    const element = await page.find('bottom-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
