import { newSpecPage } from '@stencil/core/testing';
import { AvonFooter } from '../avon-footer';

describe('avon-footer', () => {
  it('renders empty', async () => {
    const page = await newSpecPage({
      components: [AvonFooter],
      html: `<avon-footer content=""></avon-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-footer content="eyJmb290ZXJCYXNlU2VjdGlvbiI6eyJAbmFtZSI6ImZvb3RlckJhc2VTZWN0aW9uIiwiQHBhdGgiOiIvYXZvbi1HQi9zZXR0aW5nL2Zvb3RlckJhc2VTZWN0aW9uIiwiQGlkIjoiMGE4YTM4YTItZTUyYS00MDI5LWE0ZmMtOTViNzBjMzIxZWRiIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsInRuY1VSTCI6Imh0dHBzOi8vd3d3LnNob3B3aXRobXlyZXAuY28udWsvdGVybXMtY29uZGl0aW9ucyIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzM1oiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIxVDEwOjQ1OjIxLjk3OVoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yNVQwNDoyNDo1OS40MDVaIiwidG5jVGV4dCI6IlRlcm1zICYgQ29uZGl0aW9ucyIsIm1nbmw6YWN0aXZhdGlvblN0YXR1cyI6InRydWUiLCJjb3B5UmlnaHRUZXh0IjoiwqkyMDIxLCBBVk9OIFBST0RVQ1RTIiwibWdubDpsYXN0TW9kaWZpZWRCeSI6InN1cGVydXNlciIsImhlbHBVUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL2hlbHAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJjb3B5UmlnaHRTZWN0aW9uIjp7IkBuYW1lIjoiY29weVJpZ2h0U2VjdGlvbiIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9jb3B5UmlnaHRTZWN0aW9uIiwiQGlkIjoiMDhjZmVlMjAtNGQ0Ni00OTdjLThiZjYtNTE0NzEwYTU3ZTk0IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWRCeSI6ImFkbWluIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA2LTIzVDA3OjE1OjIyLjc3NVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM0WiIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJjb3B5UmlnaHRUZXh0Ijoi77+9MjAyMSwgQVZPTiBQUk9EVUNUUyAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJoZWxwVGV4dFNlY3Rpb24iOnsiQG5hbWUiOiJoZWxwVGV4dFNlY3Rpb24iLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvaGVscFRleHRTZWN0aW9uIiwiQGlkIjoiOGE2NTQ4YzYtZWNhMS00NDUwLWI0YTItOTZhODM5ZDg1MjY2IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNFoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yM1QwNzoxNToyMi43NzVaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJoZWxwVVJMIjoiaHR0cHM6Ly93d3cuc2hvcHdpdGhteXJlcC5jby51ay9oZWxwIiwiQG5vZGVzIjpbXSwidGl0bGUiOiIifSwibGlzdEl0ZW0xIjp7IkBuYW1lIjoibGlzdEl0ZW0xIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0xL2xpc3RJdGVtMCIsIkBpZCI6ImFkZjE0NWIzLWZjZjYtNDI4Ni1hNzJlLWEwYjAyZmUxZDNlMCIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJsaXN0SXRlbU5hbWUiOiJBYm91dCBVcyIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNVoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2NFoiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA4OjQ1OjA5LjkzN1oiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNDZaIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL0Fib3V0LUF2b24vIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQWJvdXQgQXZvbiJ9LCJsaXN0SXRlbTIiOnsiQG5hbWUiOiJsaXN0SXRlbTIiLCJkYXRhIjpbeyJAbmFtZSI6Imxpc3RJdGVtMCIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9saXN0SXRlbTIvbGlzdEl0ZW0wIiwiQGlkIjoiN2MwYmMzMTgtZmFhZC00OTZkLThiOGEtZWUxOTk3YjZmZmMwIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsImxpc3RJdGVtTmFtZSI6IlJldHVybnMgR3VhcmFudGVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM2WiIsIm1nbmw6bGFzdEFjdGl2YXRlZCI6IjIwMjEtMDctMDJUMDk6MjU6MTguNDY0WiIsIm1nbmw6Y3JlYXRlZCI6IjIwMjEtMDYtMjJUMDg6NDY6MTAuMzEwWiIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL3NlcnZpY2UtcGFnZXMvcmV0dXJucyIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNzlaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiU2hvcHBpbmcifSwibGlzdEl0ZW0zIjp7IkBuYW1lIjoibGlzdEl0ZW0zIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0zL2xpc3RJdGVtMCIsIkBpZCI6IjU3NDM2MWUwLWZhZDYtNDdkNy1hNDBjLTAxZjNhMmM5NDJmNyIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJsaXN0SXRlbU5hbWUiOiJBbGwgdGhlIGxhdGVzdCBnb3NzaXAiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJtZ25sOmxhc3RBY3RpdmF0ZWRCeSI6InN1cGVydXNlciIsImpjcjpjcmVhdGVkIjoiMjAyMS0wNy0yOFQwNTowODoxOC41MzhaIiwibWdubDpsYXN0QWN0aXZhdGVkIjoiMjAyMS0wNy0wMlQwOToyNToxOC40NjVaIiwibWdubDpjcmVhdGVkIjoiMjAyMS0wNi0yMlQwODo1MjowMy4zNjdaIiwibWdubDpjcmVhdGVkQnkiOiJzdXBlcnVzZXIiLCJpbWFnZUxpbmsiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE0LjI4MVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwiaW1hZ2VVcmwiOiJodHRwczovL2F2b24uZXVyb3BlLXdlc3QxLmdjcC5zdG9yZWZyb250Y2xvdWQuaW8vcGxwL2ZiLmpwZyIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQ29ubmVjdCB3aXRoIFVzIn19">
       <mock:shadow-root>
         <footer class="site-footer">
           <div class="container">
             <div class="row">
               <div class="col">
                 <h4>
                   About Avon
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.shopwithmyrep.co.uk/About-Avon/">
                       <div class="imgWithText">
                         <div>
                           About Us
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
               <div class="col">
                 <h4>
                   Shopping
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.shopwithmyrep.co.uk/service-pages/returns">
                       <div class="imgWithText">
                         <div>
                           Returns Guarantee
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
               <div class="col">
                 <h4>
                   Connect with Us
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.facebook.com/Avonuk">
                       <div class="imgWithText">
                         <ui-img height="32" src="https://avon.europe-west1.gcp.storefrontcloud.io/plp/fb.jpg" width="32"></ui-img>
                         <div>
                           All the latest gossip
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
             </div>
             <hr>
           </div>
           <div class="container">
             <div class="row">
               <div class="col">
                 <small>
                   ©2021, AVON PRODUCTS
                 </small>
               </div>
               <div class="col">
                 <ui-link color="#546264" fontsize="1rem" link="https://www.shopwithmyrep.co.uk/help">
                   <small>
                     Help
                   </small>
                 </ui-link>
               </div>
               <div class="col">
                 <ui-link color="#546264" fontsize="1rem" link="https://www.shopwithmyrep.co.uk/terms-conditions">
                   <small>
                     Terms &amp; Conditions
                   </small>
                 </ui-link>
               </div>
             </div>
           </div>
         </footer>
       </mock:shadow-root>
     </avon-footer>
    `);
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvonFooter],
      html: `<avon-footer content="eyJmb290ZXJCYXNlU2VjdGlvbiI6eyJAbmFtZSI6ImZvb3RlckJhc2VTZWN0aW9uIiwiQHBhdGgiOiIvYXZvbi1HQi9zZXR0aW5nL2Zvb3RlckJhc2VTZWN0aW9uIiwiQGlkIjoiMGE4YTM4YTItZTUyYS00MDI5LWE0ZmMtOTViNzBjMzIxZWRiIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsInRuY1VSTCI6Imh0dHBzOi8vd3d3LnNob3B3aXRobXlyZXAuY28udWsvdGVybXMtY29uZGl0aW9ucyIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzM1oiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIxVDEwOjQ1OjIxLjk3OVoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yNVQwNDoyNDo1OS40MDVaIiwidG5jVGV4dCI6IlRlcm1zICYgQ29uZGl0aW9ucyIsIm1nbmw6YWN0aXZhdGlvblN0YXR1cyI6InRydWUiLCJjb3B5UmlnaHRUZXh0IjoiwqkyMDIxLCBBVk9OIFBST0RVQ1RTIiwibWdubDpsYXN0TW9kaWZpZWRCeSI6InN1cGVydXNlciIsImhlbHBVUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL2hlbHAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJjb3B5UmlnaHRTZWN0aW9uIjp7IkBuYW1lIjoiY29weVJpZ2h0U2VjdGlvbiIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9jb3B5UmlnaHRTZWN0aW9uIiwiQGlkIjoiMDhjZmVlMjAtNGQ0Ni00OTdjLThiZjYtNTE0NzEwYTU3ZTk0IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWRCeSI6ImFkbWluIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA2LTIzVDA3OjE1OjIyLjc3NVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM0WiIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJjb3B5UmlnaHRUZXh0Ijoi77+9MjAyMSwgQVZPTiBQUk9EVUNUUyAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJoZWxwVGV4dFNlY3Rpb24iOnsiQG5hbWUiOiJoZWxwVGV4dFNlY3Rpb24iLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvaGVscFRleHRTZWN0aW9uIiwiQGlkIjoiOGE2NTQ4YzYtZWNhMS00NDUwLWI0YTItOTZhODM5ZDg1MjY2IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNFoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yM1QwNzoxNToyMi43NzVaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJoZWxwVVJMIjoiaHR0cHM6Ly93d3cuc2hvcHdpdGhteXJlcC5jby51ay9oZWxwIiwiQG5vZGVzIjpbXSwidGl0bGUiOiIifSwibGlzdEl0ZW0xIjp7IkBuYW1lIjoibGlzdEl0ZW0xIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0xL2xpc3RJdGVtMCIsIkBpZCI6ImFkZjE0NWIzLWZjZjYtNDI4Ni1hNzJlLWEwYjAyZmUxZDNlMCIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJsaXN0SXRlbU5hbWUiOiJBYm91dCBVcyIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNVoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2NFoiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA4OjQ1OjA5LjkzN1oiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNDZaIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL0Fib3V0LUF2b24vIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQWJvdXQgQXZvbiJ9LCJsaXN0SXRlbTIiOnsiQG5hbWUiOiJsaXN0SXRlbTIiLCJkYXRhIjpbeyJAbmFtZSI6Imxpc3RJdGVtMCIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9saXN0SXRlbTIvbGlzdEl0ZW0wIiwiQGlkIjoiN2MwYmMzMTgtZmFhZC00OTZkLThiOGEtZWUxOTk3YjZmZmMwIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsImxpc3RJdGVtTmFtZSI6IlJldHVybnMgR3VhcmFudGVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM2WiIsIm1nbmw6bGFzdEFjdGl2YXRlZCI6IjIwMjEtMDctMDJUMDk6MjU6MTguNDY0WiIsIm1nbmw6Y3JlYXRlZCI6IjIwMjEtMDYtMjJUMDg6NDY6MTAuMzEwWiIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL3NlcnZpY2UtcGFnZXMvcmV0dXJucyIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNzlaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiU2hvcHBpbmcifSwibGlzdEl0ZW0zIjp7IkBuYW1lIjoibGlzdEl0ZW0zIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0zL2xpc3RJdGVtMCIsIkBpZCI6IjU3NDM2MWUwLWZhZDYtNDdkNy1hNDBjLTAxZjNhMmM5NDJmNyIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJsaXN0SXRlbU5hbWUiOiJBbGwgdGhlIGxhdGVzdCBnb3NzaXAiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJtZ25sOmxhc3RBY3RpdmF0ZWRCeSI6InN1cGVydXNlciIsImpjcjpjcmVhdGVkIjoiMjAyMS0wNy0yOFQwNTowODoxOC41MzhaIiwibWdubDpsYXN0QWN0aXZhdGVkIjoiMjAyMS0wNy0wMlQwOToyNToxOC40NjVaIiwibWdubDpjcmVhdGVkIjoiMjAyMS0wNi0yMlQwODo1MjowMy4zNjdaIiwibWdubDpjcmVhdGVkQnkiOiJzdXBlcnVzZXIiLCJpbWFnZUxpbmsiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE0LjI4MVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwiaW1hZ2VVcmwiOiJodHRwczovL2F2b24uZXVyb3BlLXdlc3QxLmdjcC5zdG9yZWZyb250Y2xvdWQuaW8vcGxwL2ZiLmpwZyIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQ29ubmVjdCB3aXRoIFVzIn19"></avon-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-footer content="eyJmb290ZXJCYXNlU2VjdGlvbiI6eyJAbmFtZSI6ImZvb3RlckJhc2VTZWN0aW9uIiwiQHBhdGgiOiIvYXZvbi1HQi9zZXR0aW5nL2Zvb3RlckJhc2VTZWN0aW9uIiwiQGlkIjoiMGE4YTM4YTItZTUyYS00MDI5LWE0ZmMtOTViNzBjMzIxZWRiIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsInRuY1VSTCI6Imh0dHBzOi8vd3d3LnNob3B3aXRobXlyZXAuY28udWsvdGVybXMtY29uZGl0aW9ucyIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzM1oiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIxVDEwOjQ1OjIxLjk3OVoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yNVQwNDoyNDo1OS40MDVaIiwidG5jVGV4dCI6IlRlcm1zICYgQ29uZGl0aW9ucyIsIm1nbmw6YWN0aXZhdGlvblN0YXR1cyI6InRydWUiLCJjb3B5UmlnaHRUZXh0IjoiwqkyMDIxLCBBVk9OIFBST0RVQ1RTIiwibWdubDpsYXN0TW9kaWZpZWRCeSI6InN1cGVydXNlciIsImhlbHBVUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL2hlbHAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJjb3B5UmlnaHRTZWN0aW9uIjp7IkBuYW1lIjoiY29weVJpZ2h0U2VjdGlvbiIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9jb3B5UmlnaHRTZWN0aW9uIiwiQGlkIjoiMDhjZmVlMjAtNGQ0Ni00OTdjLThiZjYtNTE0NzEwYTU3ZTk0IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWRCeSI6ImFkbWluIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA2LTIzVDA3OjE1OjIyLjc3NVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM0WiIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJjb3B5UmlnaHRUZXh0Ijoi77+9MjAyMSwgQVZPTiBQUk9EVUNUUyAiLCJAbm9kZXMiOltdLCJ0aXRsZSI6IiJ9LCJoZWxwVGV4dFNlY3Rpb24iOnsiQG5hbWUiOiJoZWxwVGV4dFNlY3Rpb24iLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvaGVscFRleHRTZWN0aW9uIiwiQGlkIjoiOGE2NTQ4YzYtZWNhMS00NDUwLWI0YTItOTZhODM5ZDg1MjY2IiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNFoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2M1oiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA0OjEyOjEwLjA0MFoiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsImhlbHBUZXh0IjoiSGVscCIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNi0yM1QwNzoxNToyMi43NzVaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJoZWxwVVJMIjoiaHR0cHM6Ly93d3cuc2hvcHdpdGhteXJlcC5jby51ay9oZWxwIiwiQG5vZGVzIjpbXSwidGl0bGUiOiIifSwibGlzdEl0ZW0xIjp7IkBuYW1lIjoibGlzdEl0ZW0xIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0xL2xpc3RJdGVtMCIsIkBpZCI6ImFkZjE0NWIzLWZjZjYtNDI4Ni1hNzJlLWEwYjAyZmUxZDNlMCIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJsaXN0SXRlbU5hbWUiOiJBYm91dCBVcyIsIm1nbmw6bGFzdEFjdGl2YXRlZEJ5Ijoic3VwZXJ1c2VyIiwiamNyOmNyZWF0ZWQiOiIyMDIxLTA3LTI4VDA1OjA4OjE4LjUzNVoiLCJtZ25sOmxhc3RBY3RpdmF0ZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE4LjQ2NFoiLCJtZ25sOmNyZWF0ZWQiOiIyMDIxLTA2LTIyVDA4OjQ1OjA5LjkzN1oiLCJtZ25sOmNyZWF0ZWRCeSI6InN1cGVydXNlciIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNDZaIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL0Fib3V0LUF2b24vIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQWJvdXQgQXZvbiJ9LCJsaXN0SXRlbTIiOnsiQG5hbWUiOiJsaXN0SXRlbTIiLCJkYXRhIjpbeyJAbmFtZSI6Imxpc3RJdGVtMCIsIkBwYXRoIjoiL2F2b24tR0Ivc2V0dGluZy9saXN0SXRlbTIvbGlzdEl0ZW0wIiwiQGlkIjoiN2MwYmMzMTgtZmFhZC00OTZkLThiOGEtZWUxOTk3YjZmZmMwIiwiQG5vZGVUeXBlIjoibWdubDpjb250ZW50Tm9kZSIsImpjcjpjcmVhdGVkQnkiOiJhZG1pbiIsImxpc3RJdGVtTmFtZSI6IlJldHVybnMgR3VhcmFudGVlIiwibWdubDpsYXN0QWN0aXZhdGVkQnkiOiJzdXBlcnVzZXIiLCJqY3I6Y3JlYXRlZCI6IjIwMjEtMDctMjhUMDU6MDg6MTguNTM2WiIsIm1nbmw6bGFzdEFjdGl2YXRlZCI6IjIwMjEtMDctMDJUMDk6MjU6MTguNDY0WiIsIm1nbmw6Y3JlYXRlZCI6IjIwMjEtMDYtMjJUMDg6NDY6MTAuMzEwWiIsIm1nbmw6Y3JlYXRlZEJ5Ijoic3VwZXJ1c2VyIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5zaG9wd2l0aG15cmVwLmNvLnVrL3NlcnZpY2UtcGFnZXMvcmV0dXJucyIsIm1nbmw6bGFzdE1vZGlmaWVkIjoiMjAyMS0wNy0wMlQwOToyNToxNC4yNzlaIiwibWdubDphY3RpdmF0aW9uU3RhdHVzIjoidHJ1ZSIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiU2hvcHBpbmcifSwibGlzdEl0ZW0zIjp7IkBuYW1lIjoibGlzdEl0ZW0zIiwiZGF0YSI6W3siQG5hbWUiOiJsaXN0SXRlbTAiLCJAcGF0aCI6Ii9hdm9uLUdCL3NldHRpbmcvbGlzdEl0ZW0zL2xpc3RJdGVtMCIsIkBpZCI6IjU3NDM2MWUwLWZhZDYtNDdkNy1hNDBjLTAxZjNhMmM5NDJmNyIsIkBub2RlVHlwZSI6Im1nbmw6Y29udGVudE5vZGUiLCJsaXN0SXRlbU5hbWUiOiJBbGwgdGhlIGxhdGVzdCBnb3NzaXAiLCJqY3I6Y3JlYXRlZEJ5IjoiYWRtaW4iLCJtZ25sOmxhc3RBY3RpdmF0ZWRCeSI6InN1cGVydXNlciIsImpjcjpjcmVhdGVkIjoiMjAyMS0wNy0yOFQwNTowODoxOC41MzhaIiwibWdubDpsYXN0QWN0aXZhdGVkIjoiMjAyMS0wNy0wMlQwOToyNToxOC40NjVaIiwibWdubDpjcmVhdGVkIjoiMjAyMS0wNi0yMlQwODo1MjowMy4zNjdaIiwibWdubDpjcmVhdGVkQnkiOiJzdXBlcnVzZXIiLCJpbWFnZUxpbmsiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibGlzdEl0ZW1VUkwiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXZvbnVrIiwibWdubDpsYXN0TW9kaWZpZWQiOiIyMDIxLTA3LTAyVDA5OjI1OjE0LjI4MVoiLCJtZ25sOmFjdGl2YXRpb25TdGF0dXMiOiJ0cnVlIiwiaW1hZ2VVcmwiOiJodHRwczovL2F2b24uZXVyb3BlLXdlc3QxLmdjcC5zdG9yZWZyb250Y2xvdWQuaW8vcGxwL2ZiLmpwZyIsIm1nbmw6bGFzdE1vZGlmaWVkQnkiOiJzdXBlcnVzZXIiLCJAbm9kZXMiOltdfV0sInRpdGxlIjoiQ29ubmVjdCB3aXRoIFVzIn19">
       <mock:shadow-root>
         <footer class="site-footer">
           <div class="container">
             <div class="row">
               <div class="col">
                 <h4>
                   About Avon
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.shopwithmyrep.co.uk/About-Avon/">
                       <div class="imgWithText">
                         <div>
                           About Us
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
               <div class="col">
                 <h4>
                   Shopping
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.shopwithmyrep.co.uk/service-pages/returns">
                       <div class="imgWithText">
                         <div>
                           Returns Guarantee
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
               <div class="col">
                 <h4>
                   Connect with Us
                 </h4>
                 <ul class="footer-links">
                   <li>
                     <ui-link link="https://www.facebook.com/Avonuk">
                       <div class="imgWithText">
                         <ui-img height="32" src="https://avon.europe-west1.gcp.storefrontcloud.io/plp/fb.jpg" width="32"></ui-img>
                         <div>
                           All the latest gossip
                         </div>
                       </div>
                     </ui-link>
                   </li>
                 </ul>
               </div>
             </div>
             <hr>
           </div>
           <div class="container">
             <div class="row">
               <div class="col">
                 <small>
                   ©2021, AVON PRODUCTS
                 </small>
               </div>
               <div class="col">
                 <ui-link color="#546264" fontsize="1rem" link="https://www.shopwithmyrep.co.uk/help">
                   <small>
                     Help
                   </small>
                 </ui-link>
               </div>
               <div class="col">
                 <ui-link color="#546264" fontsize="1rem" link="https://www.shopwithmyrep.co.uk/terms-conditions">
                   <small>
                     Terms &amp; Conditions
                   </small>
                 </ui-link>
               </div>
             </div>
           </div>
         </footer>
       </mock:shadow-root>
     </avon-footer>
    `);
  });
});
