import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'category-nav',
  styleUrl: 'category-nav.scss',
  shadow: true,
})
export class CategoryNav {
  @Prop() categories = [];
  @State() childData = [];
  @State() hovered = false;

  mouseOver(data, parentSlug) {
    this.childData = data.map(cat => ({
      ...cat,
      url: `/${parentSlug}/${cat.slug}`,
    }));
    this.hovered = true;
  }

  render() {
    return (
      <div class="category_navigation">
        <ul>
          {this.categories.map(category => (
            <li key={category.id} onMouseOver={() => this.mouseOver(category.children, category.slug)} onMouseOut={() => (this.hovered = false)}>
              <ui-link link={category.slug ? `/c/${category.slug}` : '#'}>
                <span>{category.name}</span>
              </ui-link>
            </li>
          ))}
        </ul>
        <div class="mega-menu" style={{ display: this.hovered ? 'grid' : 'none' }} onMouseOver={() => (this.hovered = true)} onMouseOut={() => (this.hovered = false)}>
          <ul class="subCat">
            <li class="heading">Categories</li>
            {this.childData.map(subCat => (
              <li key={subCat.id}>
                <ui-link link={`/c${subCat.url}`}>
                  <span>{subCat.name}</span>
                </ui-link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
