import { Component, h, Prop } from '@stencil/core';

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
          <ui-link link="/rep">
            <span class="topbar-link">{this.settings?.findRep}</span>
          </ui-link>
          <span>&nbsp;|&nbsp;</span>
          <ui-link link="#">
            <span class="topbar-link">{this.settings?.becomeRep}</span>
          </ui-link>
        </div>
        <div>
          <ui-link link="#">
            <span class="topbar-link">{this.settings?.loginText}</span>
          </ui-link>
        </div>
      </div>
    );
  }
}
