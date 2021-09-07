import { newE2EPage } from '@stencil/core/testing';

describe('ui-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-heading></ui-heading>');

    const element = await page.find('ui-heading');
    expect(element).toHaveClass('hydrated');
  });
});
