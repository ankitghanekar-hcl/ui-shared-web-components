// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Product_Card',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiProduct_Card = ({ heading, imgalt, imgheight, imgwidth, image, btndisable, btnlabel, cardwidth, cardheight, cardbgcolor, price }) => {
  return `<ui-product_card heading="${heading}" imgalt="${imgalt}" imgheight="${imgheight}" imgwidth="${imgwidth}" image="${image}"  btndisable="${btndisable}" btnlabel="${btnlabel}" 
  cardwidth="${cardwidth}" cardheight="${cardheight}" cardbgcolor="${cardbgcolor}" price="${price}"/>`;
};

UiProduct_Card.args = {
  heading: 'Product Title',
  imgalt: 'sample_img',
  image: 'https://www.shopwithmyrep.co.uk/assets/en-gb/images/product/prod_1223000_1_613x613.jpg',
  imgheight: '326',
  imgwidth: '216',
  btndisable: false,
  btnlabel: 'ADD TO BAG',
  cardwidth: '400px',
  cardheight: '500px',
  price: '0',
};

UiProduct_Card.argTypes = {
  btndisable: { control: 'boolean' },
  cardbgcolor: { control: 'color' },
};
