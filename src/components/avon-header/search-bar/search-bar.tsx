import { Component, h } from '@stencil/core';
import 'design-web-components';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  render() {
    return (
      <div class="searchBar">
        <ui-textbox placeholder="Search for products" usecase="search" width="fullwidth" />
        <ui-button shape="text" class="searchBar__button">
          <ui-icon icon="search" size="20" />
        </ui-button>
      </div>
    );
  }
}
