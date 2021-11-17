import { newSpecPage } from '@stencil/core/testing';
import { UiModal } from '../ui-modal';

describe('ui-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiModal],
      html: `<ui-modal></ui-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-modal>
        <mock:shadow-root>
         <div class="modal_none">
           <div class="modal right" style="width: 300px; height: 100%;">
             <div class="title">
               <span style="color: black; font-weight: 100; font-size: 18.72px; font-family: Montserrat,Arial;">
                 Modal title
               </span>
               <span class="close">
                 ×
               </span>
             </div>
             <div class="content">
               <slot name="modal_content"></slot>
             </div>
             <div class="button-container">
               <avon-button color="secondary" label="Go back to shopping" size="medium" width="fullwidth"></avon-button>
             </div>
           </div>
         </div>
       </mock:shadow-root>
      </ui-modal>
    `);
  });
});
