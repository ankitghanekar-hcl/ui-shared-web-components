import { newE2EPage } from '@stencil/core/testing';

describe('top-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<top-bar></top-bar>');

    const element = await page.find('top-bar');
    expect(element).toHaveClass('hydrated');
  });
});
