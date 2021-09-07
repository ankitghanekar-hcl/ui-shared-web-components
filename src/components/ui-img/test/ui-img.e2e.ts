import { newE2EPage } from '@stencil/core/testing';

describe('ui-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-img></ui-img>');

    const element = await page.find('ui-img');
    expect(element).toHaveClass('hydrated');
  });
});
