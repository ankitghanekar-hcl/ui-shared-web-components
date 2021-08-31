import { newSpecPage } from '@stencil/core/testing';
import { CategoryNav } from '../category-nav';

describe('category-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CategoryNav],
      html: `<category-nav></category-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <category-nav>
        <mock:shadow-root>
          <div class="category_navigation">
           <ul></ul>
           <div class="mega-menu" style="display: none;">
             <ul class="subCat">
               <li class="heading">
                 Categories
               </li>
             </ul>
           </div>
         </div>
        </mock:shadow-root>
      </category-nav>
    `);
  });
});
