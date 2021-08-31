import { newSpecPage } from '@stencil/core/testing';
import { DesktopMenu } from '../desktop-menu';

describe('desktop-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesktopMenu],
      html: `<desktop-menu></desktop-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <desktop-menu>
        <mock:shadow-root>
          <div class="header">
           <div class="header__row">
             <div class="header__logo">
               <a href="/">
                 <img class="header__logoImage" src="https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png">
               </a>
             </div>
             <div class="header-actions">
               <search-bar></search-bar>
               <div class="header-icons">
                 <ui-button class="wishlistHeader" shape="text">
                   <span>
                     <ui-icon color="#7f28c4" icon="heart" size="12"></ui-icon>
                     (0)Wishlist
                   </span>
                 </ui-button>
                 <ui-button shape="text">
                   <div class="miniCart">
                     <ui-icon icon="bag" size="31"></ui-icon>
                     <span>
                       (0) Shopping Bag
                     </span>
                   </div>
                 </ui-button>
               </div>
             </div>
           </div>
           <div class="top_navigation_desk">
             <div class="top-nav-link">
               <ui-link color="rgb(29, 31, 34)" link="/products">
                 <span>
                   Products
                 </span>
               </ui-link>
             </div>
             <div class="top-nav-link">
               <ui-link color="rgb(29, 31, 34)" link="#">
                 <span>
                   Quick Shop
                 </span>
               </ui-link>
             </div>
             <div class="top-nav-link">
               <ui-link color="rgb(29, 31, 34)" link="#">
                 <span>
                   Offers
                 </span>
               </ui-link>
             </div>
             <div class="top-nav-link">
               <ui-link color="rgb(29, 31, 34)" link="#">
                 <span>
                   Avon Loves Blogs
                 </span>
               </ui-link>
             </div>
             <div class="top-nav-link">
               <ui-link color="rgb(29, 31, 34)" link="#">
                 <span>
                   REP HUB
                 </span>
               </ui-link>
             </div>
           </div>
           <category-nav></category-nav>
         </div>
        </mock:shadow-root>
      </desktop-menu>
    `);
  });
});
