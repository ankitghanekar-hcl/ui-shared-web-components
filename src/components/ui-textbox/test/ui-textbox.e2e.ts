import { newE2EPage } from '@stencil/core/testing';

describe('ui-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-textbox></ui-textbox>');

    const element = await page.find('ui-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
