import { Component, h, Prop, State } from '@stencil/core';
import 'design-web-components';
import 'ui-icons';

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @Prop() content;
  @State() data;

  componentWillLoad() {
    let str;
    if (typeof Buffer !== 'undefined') {
      const b = new Buffer(this.content, 'base64');
      str = b.toString('utf8');
    } else str = atob(this.content);

    this.data = JSON.parse(str);
  }
  render() {
    return (
      <ui-box_container>
        <div class="container desktop-only">
          <top-bar settings={this.data.settings} />
        </div>
        <div class="header-block">
          <div class="smartphone-only">
            <mobile-menu categoryList={this.data.categories} settings={this.data.settings} />
          </div>
          <div class="desktop-only">
            <desktop-menu data={this.data.categories} settings={this.data.settings} />
          </div>
        </div>
      </ui-box_container>
    );
  }
}
