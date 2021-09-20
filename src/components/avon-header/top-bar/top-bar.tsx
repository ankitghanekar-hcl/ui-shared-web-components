import { Component, h, Prop } from '@stencil/core';
import 'design-web-components';

@Component({
  tag: 'top-bar',
  styleUrl: 'top-bar.scss',
  shadow: true,
})
export class TopBar {
  @Prop() settings = null;

  render() {
    return (
      <div class="topbar">
        <div class="rep">
          <ui-link link="/rep">{this.settings?.findRep}</ui-link>
          <span>&nbsp;|&nbsp;</span>
          <ui-link link="#">{this.settings?.becomeRep}</ui-link>
        </div>
        <div>
          <ui-link link="#">{this.settings?.loginText}</ui-link>
        </div>
      </div>
    );
  }
}
