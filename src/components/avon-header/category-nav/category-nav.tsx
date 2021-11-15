import { Component, h, Prop, State } from '@stencil/core';
import 'design-web-components';

@Component({
  tag: 'category-nav',
  styleUrl: 'category-nav.scss',
  shadow: true,
})
export class CategoryNav {
  @Prop() categories = [];
  @State() childData = [];
  @State() hovered = false;

  mouseOver(data) {
    this.childData = data;
    this.hovered = true;
  }

  render() {
    return (
      <div class="category_navigation">
        <ul>
          {this.categories.map(category => (
            <li key={category.key} onMouseOver={() => this.mouseOver(category.subcategories)} onMouseOut={() => (this.hovered = false)}>
              <ui-link link={category.attributes.url[0]}>
                <span>{category.displayName}</span>
              </ui-link>
            </li>
          ))}
        </ul>
        <div class="mega-menu" style={{ display: this.hovered ? 'grid' : 'none' }} onMouseOver={() => (this.hovered = true)} onMouseOut={() => (this.hovered = false)}>
          <ul class="subCat">
            <li class="heading">Categories</li>
            {this.childData.map(subCat => (
              <li key={subCat.key}>
                <ui-link link={subCat.attributes.url[0]}>
                  <span>{subCat.displayName}</span>
                </ui-link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
