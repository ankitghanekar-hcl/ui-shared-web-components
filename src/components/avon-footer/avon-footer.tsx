import { Component, Prop, h, State } from '@stencil/core';
import 'ui-design-web-components';

@Component({
  tag: 'avon-footer',
  styleUrl: 'avon-footer.scss',
  shadow: true,
})
export class AvonFooter {
  @Prop() isDark = false;
  @Prop() content;
  @State() data;

  componentWillLoad() {
    const b = new Buffer(this.content, 'base64');
    const str = b.toString('utf8');
    this.data = JSON.parse(str);
  }
  render() {
    return (
      <footer class={`site-footer ${this.isDark ? 'dark' : ''}`}>
        <div class="container">
          <div class="row">
            {['listItem1', 'listItem2', 'listItem3'].map(key => (
              <div class="col" key={key}>
                <h4>{this.data[key].title}</h4>
                <ul class="footer-links">
                  {this.data[key].data.map(item => (
                    <li key={item['@name']}>
                      <avon-link link={item.listItemURL}>
                        <div class="imgWithText" slot="link_slot">
                          {item.imageUrl && <img src={item.imageUrl} width="32" height="32" />}
                          <div>{item.listItemName}</div>
                        </div>
                      </avon-link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <small>{this.data.footerBaseSection?.copyRightText}</small>
            </div>
            <div class="col">
              <avon-link link={this.data.footerBaseSection?.helpURL}>
                <span slot="link_slot">{this.data.footerBaseSection?.helpText}</span>
              </avon-link>
            </div>
            <div class="col">
              <avon-link link={this.data.footerBaseSection?.tncURL}>
                <span slot="link_slot">{this.data.footerBaseSection?.tncText}</span>
              </avon-link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
