import { r as registerInstance, h } from './index-304a2a43.js';

const searchBarCss =
  ':host{display:block}:host .searchBar{display:block;position:relative;background:#fff;border-radius:1.5rem;padding:0 1rem;margin-top:0.5rem;margin-right:2.2rem;margin-left:2.2rem;height:2rem}@media (min-width: 1024px){:host .searchBar{width:20rem;margin-left:0}}:host .searchBar__input{outline:none;font-size:0.9rem;flex-grow:1;background:transparent;text-align:left;width:100%;height:100%;border:none}:host .searchBar__button{color:#1d1f22;background:transparent;transition:background 0.8s;background-position:50%;text-decoration:none;cursor:pointer;border-radius:0;white-space:nowrap;border-width:0;top:0.4em;display:inline;position:absolute;right:0.4em}';

const SearchBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(
      'div',
      { class: 'searchBar' },
      h('ui-textbox', { placeholder: 'Search for products', usecase: 'search', width: 'fullwidth' }),
      h('ui-button', { shape: 'text', class: 'searchBar__button' }, h('ui-icon', { icon: 'search', size: '20' })),
    );
  }
};
SearchBar.style = searchBarCss;

export { SearchBar as search_bar };
