// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui trending block',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiTrendingBlock = ({ image, cardwidth, cardheight, cardbgimage, heading, description }) => {
  return `<ui-trending-block h image="${image}" 
  cardwidth="${cardwidth}" cardheight="${cardheight}" 
  cardbgimage="${cardbgimage}" heading="${heading}" description="${description}"/>`;
};

UiTrendingBlock.args = {
  cardwidth: '478px',
  cardheight: '320px',
  heading: 'Win a make-up tutorial with Lisa Armstrong',
  description: 'Trending stories description',
  cardbgimage: 'https://www.shopwithmyrep.co.uk/mediamarket-uk/10104/microsoftteams-image-5_unq_94575c318ac6482f96b42678acc7852e.png',
};

UiTrendingBlock.argTypes = {
  btndisable: { control: 'boolean' },
  cardbgcolor: { control: 'color' },
};
