import { newSpecPage } from '@stencil/core/testing';
import { MobileMenu } from '../mobile-menu';

describe('mobile-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MobileMenu],
      html: `<mobile-menu></mobile-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <mobile-menu>
        <mock:shadow-root>
          <div class="header-avon smartphone-only">
           <div class="topbar">
             <nav>
               <div class="mobile-menu">
                 <div>
                   <span></span>
                   <span></span>
                   <span></span>
                   <small>
                     MENU
                   </small>
                 </div>
                 <aside class="smartphone-only" style="left: -1000px;">
                   <div class="top_navigation">
                     <ul class="mobNav" id="nav"></ul>
                   </div>
                   <div class="top_navigation_desk">
                     <div class="top-nav-link">
                       <avon-link link="/products">
                         Products
                       </avon-link>
                     </div>
                     <div class="top-nav-link">
                       <avon-link link="#">
                         Quick Shop
                       </avon-link>
                     </div>
                     <div class="top-nav-link">
                       <avon-link link="#">
                         Offers
                       </avon-link>
                     </div>
                     <div class="top-nav-link">
                       <avon-link link="#">
                         Avon Loves Blogs
                       </avon-link>
                     </div>
                     <div class="top-nav-link">
                       <avon-link link="#">
                         REP HUB
                       </avon-link>
                     </div>
                   </div>
                 </aside>
               </div>
             </nav>
             <div class="logo">
               <a href="/">
                 <img class="header__logoImage" src="https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png">
               </a>
             </div>
             <div class="account-block">
               <div class="account">
                 <ui-icon icon="avatarUser" size="31"></ui-icon>
               </div>
               <div class="cart-bag">
                 <ui-link link="/cart">
                   <ui-icon icon="bag" size="31"></ui-icon>
                 </ui-link>
                 <span class="cart-count">
                   1
                 </span>
               </div>
             </div>
           </div>
           <search-bar></search-bar>
         </div>
        </mock:shadow-root>
      </mobile-menu>
    `);
  });
});
