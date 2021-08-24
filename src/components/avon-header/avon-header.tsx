import { Component, h, Prop, State } from '@stencil/core';
import 'ui-design-web-components';

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @Prop() content;
  @State() data;

  componentWillLoad() {
    const b = new Buffer(this.content, 'base64');
    const str = b.toString('utf8');
    this.data = JSON.parse(str);
  }
  render() {
    return (
      <div>
        <div class="container desktop-only">
          <avon-topbar settings={this.data.settings} />
        </div>
        <div class="header-block">
          <div class="smartphone-only">
            <mobile-menu categoryList={this.data.categories} settings={this.data.settings} />
          </div>
          <div class="desktop-only">
            <desktop-menu data={this.data.categories} settings={this.data.settings} />
          </div>
        </div>
      </div>
    );
  }
}
