import { newSpecPage } from '@stencil/core/testing';
import { TopBar } from '../top-bar';

describe('top-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TopBar],
      html: `<top-bar></top-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <top-bar>
        <mock:shadow-root>
          <div class="topbar">
           <div class="rep">
             <ui-link link="/rep">
               <span class="topbar-link"></span>
             </ui-link>
             <span>
               |
             </span>
             <ui-link link="#">
               <span class="topbar-link"></span>
             </ui-link>
           </div>
           <div>
             <ui-link link="#">
               <span class="topbar-link"></span>
             </ui-link>
           </div>
         </div>
        </mock:shadow-root>
      </top-bar>
    `);
  });
});
