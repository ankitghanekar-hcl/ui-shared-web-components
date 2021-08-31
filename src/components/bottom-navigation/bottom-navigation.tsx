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
        <div>
          <ui-link link="/">
            <ui-button shape="text">
              <ui-icon icon="home" size="24" />
            </ui-button>
            <div>Home</div>
          </ui-link>
        </div>
        <div>
          <ui-button shape="text">
            <ui-icon icon="heart" size="24" />
          </ui-button>
          <div>Wishlist</div>
        </div>
        <div>
          <ui-button shape="text">
            <ui-icon icon="profile" size="24" />
          </ui-button>
          <div>Account</div>
        </div>
        <div>
          <ui-button shape="text">
            <ui-icon icon="bag" size="24" />
          </ui-button>
          <div>Basket</div>
        </div>
      </div>
    );
  }
}
