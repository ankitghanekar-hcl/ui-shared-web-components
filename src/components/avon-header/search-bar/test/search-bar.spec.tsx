import { newSpecPage } from '@stencil/core/testing';
import { SearchBar } from '../search-bar';

describe('search-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchBar],
      html: `<search-bar></search-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <search-bar>
        <mock:shadow-root>
          <div class="searchBar">
           <ui-textbox placeholder="Search for products" usecase="search" width="fullwidth"></ui-textbox>
           <ui-button class="searchBar__button" shape="text">
             <ui-icon icon="search" size="20"></ui-icon>
           </ui-button>
         </div>
        </mock:shadow-root>
      </search-bar>
    `);
  });
});
