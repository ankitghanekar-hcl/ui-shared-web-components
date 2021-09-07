import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-product_card',
  styleUrl: 'ui-product_card.css',
  shadow: true,
})
export class UiProduct_card {
  /**
   * The label
   */
  @Prop() image: string = 'https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg';
  @Prop() imgwidth: string = '216';
  @Prop() imgheight: string = '326';
  @Prop() imgalt: string = 'sample_image';
  @Prop() heading: string = 'Product Title';
  @Prop() btndisable: boolean = false;
  @Prop() btnlabel: string = 'ADD TO BAG';
  @Prop() price: string = '0';
  @Prop() cardwidth: string;
  @Prop() cardheight: string;
  @Prop() cardbgcolor: string;

  render() {
    return (
      <ui-box_container width={this.cardwidth} height={this.cardheight} backgroundcolor={this.cardbgcolor}>
        <ui-img src={this.image} width={this.imgwidth} height={this.imgheight} alt={this.imgalt}></ui-img>
        <ui-heading label={this.heading} level={'h3'}></ui-heading>
        <ui-label label={`£${this.price}`} fontfamily={'Montserrat,Arial'} fontsize={'1.4rem'} color={'#7f28c4'} />
        <ui-button disabled={this.btndisable} color={'secondary'} label={this.btnlabel}></ui-button>
      </ui-box_container>
    );
  }
}
