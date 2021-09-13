import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-trending-block',
  styleUrl: 'ui-trending-block.scss',
  shadow: true,
})
export class UiTrendingBlock {
  /**
   * The label
   */
  @Prop() cardbgimage: string = 'https://www.shopwithmyrep.co.uk/mediamarket-uk/10104/microsoftteams-image-5_unq_94575c318ac6482f96b42678acc7852e.png';
  @Prop() cardwidth: string;
  @Prop() cardheight: string;
  @Prop() heading: string = 'Product Title';
  @Prop() description: string = 'Trending stories description';
  @Prop() headingptop: string = '200px';

  render() {
    return (
      <ui-box_container style={{ display: 'inline-block', position: 'relative' }} width={this.cardwidth} height={this.cardheight} backgroundimage={this.cardbgimage}>
        <ui-box_container style={{ position: 'absolute', bottom: '0', width: '100%' }} width={'auto'} height={'auto'} backgroundcolor={'rgba(255, 255, 255, 0.66)'}>
          <ui-heading label={this.heading} level={'h2'}></ui-heading>
          <ui-label label={this.description} fontsize={'-0.6rem'} />
        </ui-box_container>
      </ui-box_container>
    );
  }
}
