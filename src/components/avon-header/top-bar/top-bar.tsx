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
          <ui-link link="/rep" color="rgb(29, 31, 34)" fontsize=".7em">
            <span>{this.settings.findRep}</span>
          </ui-link>
          <span>&nbsp;|&nbsp;</span>
          <ui-link link="#" color="rgb(29, 31, 34)" fontsize=".7em">
            <span>{this.settings.becomeRep}</span>
          </ui-link>
        </div>
        <div>
          <ui-link link="#" color="rgb(29, 31, 34)" fontsize=".7em">
            <span>{this.settings.loginText}</span>
          </ui-link>
        </div>
      </div>
    );
  }
}
