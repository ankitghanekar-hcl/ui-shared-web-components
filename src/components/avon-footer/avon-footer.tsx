import { Component, Prop, h, State } from '@stencil/core';
import 'design-web-components';

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
    let str;
    if (typeof Buffer !== 'undefined') {
      const b = new Buffer(this.content, 'base64');
      str = b.toString('utf8');
    } else str = atob(this.content);

    this.data = JSON.parse(str);
  }
  render() {
    return (
      <footer class={`site-footer ${this.isDark ? 'dark' : ''}`}>
        <div class="container">
          <div class="row">
            {['listItem1', 'listItem2', 'listItem3'].map(key => (
              <div class="col" key={key}>
                <h4>{this.data[key]?.title}</h4>
                <ul class="footer-links">
                  {this.data[key]?.data.map(item => (
                    <li key={item['@name']}>
                      <ui-link link={item.listItemURL}>
                        <div class="imgWithText">
                          {item.imageUrl && <ui-img src={item.imageUrl} width="32" height="32" />}
                          <div>{item.listItemName}</div>
                        </div>
                      </ui-link>
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
              <ui-link link={this.data.footerBaseSection?.helpURL} color="#546264" fontsize="1rem">
                <small>{this.data.footerBaseSection?.helpText}</small>
              </ui-link>
            </div>
            <div class="col">
              <ui-link link={this.data.footerBaseSection?.tncURL} color="#546264" fontsize="1rem">
                <small>{this.data.footerBaseSection?.tncText}</small>
              </ui-link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
