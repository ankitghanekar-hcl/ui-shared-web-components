import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-304a2a43.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.7.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = namespace => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
  // NOTE!! This fn cannot use async/await!
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo('Running in development mode.');
  }
  if (BUILD.cssVarShim) {
    // shim css vars
    plt.$cssShim$ = win.__cssshim;
  }
  if (BUILD.cloneNodeFix) {
    // opted-in to polyfill cloneNode() for slot polyfilled components
    patchCloneNodeFix(H.prototype);
  }
  if (BUILD.profile && !performance.mark) {
    // not all browsers support performance.mark/measure (Safari 10)
    performance.mark = performance.measure = () => {
      /*noop*/
    };
    performance.getEntriesByName = () => [];
  }
  // @ts-ignore
  const scriptElm =
    BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
      ? Array.from(doc.querySelectorAll('script')).find(
          s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE,
        )
      : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
  if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
    // Safari < v11 support: This IF is true if it's Safari below v11.
    // This fn cannot use async/await since Safari didn't support it until v11,
    // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
    // so both the ESM file and nomodule file would get downloaded. Only Safari
    // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
    // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
    // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
    return {
      then() {
        /* promise noop */
      },
    };
  }
  if (!BUILD.safari10 && importMeta !== '') {
    opts.resourcesUrl = new URL('.', importMeta).href;
  } else if (BUILD.dynamicImportShim || BUILD.safari10) {
    opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
    if (BUILD.dynamicImportShim) {
      patchDynamicImport(opts.resourcesUrl, scriptElm);
    }
    if (BUILD.dynamicImportShim && !win.customElements) {
      // module support, but no custom elements support (Old Edge)
      // @ts-ignore
      return import(/* webpackChunkName: "polyfills-dom" */ './dom-3fba5032.js').then(() => opts);
    }
  }
  return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
  const importFunctionName = getDynamicImportFunction(NAMESPACE);
  try {
    // test if this browser supports dynamic imports
    // There is a caching issue in V8, that breaks using import() in Function
    // By generating a random string, we can workaround it
    // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
    win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
  } catch (e) {
    // this shim is specifically for browsers that do support "esm" imports
    // however, they do NOT support "dynamic" imports
    // basically this code is for old Edge, v18 and below
    const moduleMap = new Map();
    win[importFunctionName] = src => {
      const url = new URL(src, base).href;
      let mod = moduleMap.get(url);
      if (!mod) {
        const script = doc.createElement('script');
        script.type = 'module';
        script.crossOrigin = orgScriptElm.crossOrigin;
        script.src = URL.createObjectURL(
          new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
            type: 'application/javascript',
          }),
        );
        mod = new Promise(resolve => {
          script.onload = () => {
            resolve(win[importFunctionName].m);
            script.remove();
          };
        });
        moduleMap.set(url, mod);
        doc.head.appendChild(script);
      }
      return mod;
    };
  }
};
const patchCloneNodeFix = HTMLElementPrototype => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function (deep) {
    if (this.nodeName === 'TEMPLATE') {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        // Node.ATTRIBUTE_NODE === 2, and checking because IE11
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(
    [
      [
        'avon-header',
        [
          [
            1,
            'avon-header',
            { content: [8], data: [8], categories: [32], settings: [32], cartCount: [32], wishlistCount: [32] },
            [
              [0, 'showCart', 'showCartHandler'],
              [0, 'showWishlist', 'showWishlistHandler'],
            ],
          ],
        ],
      ],
      ['cart-sidebar', [[1, 'cart-sidebar', { color: [1], cart: [32] }]]],
      ['wishlist-sidebar', [[1, 'wishlist-sidebar', { wishlist: [32] }]]],
      [
        'ui-product_card',
        [
          [
            1,
            'ui-product_card',
            { image: [1], imgwidth: [1], imgheight: [1], imgalt: [1], heading: [1], btndisable: [4], btnlabel: [1], price: [1], cardwidth: [1], cardheight: [1], cardbgcolor: [1] },
          ],
        ],
      ],
      ['bottom-navigation', [[1, 'bottom-navigation', { cartCount: [32], wishlistCount: [32] }]]],
      ['ui-trending-block', [[1, 'ui-trending-block', { cardbgimage: [1], cardwidth: [1], cardheight: [1], heading: [1], description: [1], headingptop: [1] }]]],
      ['avon-footer', [[1, 'avon-footer', { isDark: [4, 'is-dark'], content: [1544], data: [32] }]]],
      ['wrap-story', [[1, 'wrap-story', { props: [1], tag: [1] }]]],
      ['ui-icon', [[1, 'ui-icon', { icon: [1], color: [8], size: [8] }]]],
      [
        'ui-modal',
        [
          [
            1,
            'ui-modal',
            {
              modalId: [1, 'modal-id'],
              modaltitle: [1],
              titlecolor: [1],
              titlefontfamily: [1],
              titlefontsize: [1],
              titlefontweight: [1],
              width: [1],
              height: [1],
              btncolor: [1],
              position: [1],
              open: [1540],
              buttonlabel: [1],
              closeCallback: [16],
            },
          ],
        ],
      ],
      ['ui-link', [[1, 'ui-link', { link: [1], color: [1], textdecoration: [1], fontsize: [1], fontfamily: [1], fontweight: [1], class: [1] }]]],
      ['category-nav', [[1, 'category-nav', { categories: [16], childData: [32], hovered: [32] }]]],
      ['desktop-menu', [[1, 'desktop-menu', { data: [8], settings: [8], cartCount: [2, 'cart-count'], wishlistCount: [2, 'wishlist-count'] }]]],
      ['mobile-menu', [[1, 'mobile-menu', { categoryList: [16], settings: [8], cartCount: [8, 'cart-count'], menuOpen: [32], subMenuToggled: [32], menuLeftPosition: [32] }]]],
      ['top-bar', [[1, 'top-bar', { settings: [8] }]]],
      [
        'ui-cart_product',
        [
          [
            1,
            'ui-cart_product',
            {
              image: [1],
              imgwidth: [1],
              imgheight: [1],
              imgalt: [1],
              link: [1],
              price: [1],
              heading: [1],
              titlecolor: [1],
              titlefontsize: [1],
              titlefontfamily: [1],
              boxwidth: [1],
              boxheight: [1],
              boxbgcolor: [1],
              removeCallback: [16],
            },
          ],
        ],
      ],
      ['ui-box_container', [[1, 'ui-box_container', { width: [1], backgroundcolor: [1], backgroundimage: [1], height: [1], display: [1] }]]],
      ['ui-heading', [[1, 'ui-heading', { label: [1], level: [1] }]]],
      ['ui-label', [[1, 'ui-label', { label: [1], color: [1], fontfamily: [1], fontsize: [1], fontweight: [1] }]]],
      ['ui-textbox', [[1, 'ui-textbox', { placeholder: [1], disabled: [516], width: [1], shape: [1], usecase: [1] }]]],
      ['ui-button', [[1, 'ui-button', { label: [1], disabled: [516], size: [1], shape: [1], color: [1], width: [1] }]]],
      ['search-bar', [[1, 'search-bar']]],
      ['ui-img', [[1, 'ui-img', { src: [1], width: [1], height: [1], alt: [1] }]]],
    ],
    options,
  );
});
