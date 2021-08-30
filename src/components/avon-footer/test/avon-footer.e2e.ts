import { newE2EPage } from '@stencil/core/testing';

describe('avon-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avon-footer></avon-footer>');

    const element = await page.find('avon-footer');
    expect(element).toHaveClass('hydrated');
  });
});
