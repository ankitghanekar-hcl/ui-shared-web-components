import { Component, h } from '@stencil/core';
import 'design-web-components';
import 'ui-icons';

@Component({
  tag: 'bottom-navigation',
  styleUrl: 'bottom-navigation.scss',
  shadow: true,
})
export class BottomNavigation {
  render() {
    return (
      <div class="navigation-bottom">
        <div class="item">
          <ui-link link="/" class="link">
            <ui-icon icon="home" size="20" />
            <div class="label">Home</div>
          </ui-link>
        </div>
        <div class="item">
          <ui-button shape="text">
            <ui-icon icon="heart" size="20" color="#7f28c4" />
            <br />
            <div class="label">Wishlist</div>
          </ui-button>
        </div>
        <div class="item">
          <ui-button shape="text">
            <ui-icon icon="profile" size="20" color="#7f28c4" />
            <br />
            <div class="label">Account</div>
          </ui-button>
        </div>
        <div class="item">
          <ui-button shape="text">
            <ui-icon icon="bag" size="23" color="#7f28c4" />
            <br />
            <div class="label">Basket</div>
          </ui-button>
        </div>
      </div>
    );
  }
}
