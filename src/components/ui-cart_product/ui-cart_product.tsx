import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-cart_product',
  styleUrl: 'ui-cart_product.scss',
  shadow: true,
})
export class UiCartProduct {
  /**
   * Image src
   */
  @Prop() image: string;

  /**
   * image width
   */
  @Prop() imgwidth: string = '180';

  /**
   * image height
   */
  @Prop() imgheight: string = '200';

  /**
   * image alt
   */
  @Prop() imgalt: string = 'src_eg';

  /**
   * link
   */
  @Prop() link: string;

  /**
   * price
   */
  @Prop() price: string;

  /**
   * Product Heading
   */
  @Prop() heading: string;

  /**
   * titlecolor
   */
  @Prop() titlecolor: string = '#43464E';
  /**
   * title fontsize
   */
  @Prop() titlefontsize: string = '16px';
  /**
   * title fontfamily
   */
  @Prop() titlefontfamily: string = 'Montserrat,sans-serif';

  /**
   * box width
   */
  @Prop() boxwidth: string = '300';
  /**
   * box height
   */
  @Prop() boxheight: string = '300';

  /**
   * box bgcolor
   */
  @Prop() boxbgcolor: string = 'white';
  /**
   * removeCallback works only in Stencil components
   */
  @Prop() removeCallback?: Function;

  private handleRemoveClick = () => {
    this.removeCallback && this.removeCallback();
  };

  render() {
    return (
      <div class="product">
        <div class="img">
          <ui-img src={this.image} width={this.imgwidth} height={this.imgheight} alt={this.imgalt} />
        </div>
        <div class="title">
          <ui-link link={this.link}>
            <span class="link">{this.heading}</span>
          </ui-link>
          <h2>{this.price}</h2>
        </div>
        <ui-button class="remove" shape="text" onClick={this.handleRemoveClick}>
          <h2>&times;</h2>
        </ui-button>
      </div>
    );
  }
}
