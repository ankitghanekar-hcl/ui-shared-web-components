// @ts-ignore
import readme from './readme.md';

export default {
  title: 'UI Cart Product',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiCartProduct = ({ image, imgwidth, imgheight, imgalt, link, heading, titlecolor, titlefontsize, boxwidth, boxheight }) => {
  return `
  <ui-cart_product
  image="${image}"
  imgwidth="${imgwidth}"
  imgheight="${imgheight}"
  imgalt="${imgalt}"
  link="${link}"
  heading="${heading}"
  titlefontsize="${titlefontsize}"
  titlecolor="${titlecolor}"
  boxwidth="${boxwidth}"
  boxheight="${boxheight}">
  </ui-cart_product>`;
};

UiCartProduct.args = {
  heading: 'Product Title',
  imgalt: 'sample_img',
  image: 'https://www.shopwithmyrep.co.uk/assets/en-gb/images/product/prod_1223000_1_613x613.jpg',
  imgheight: '200',
  imgwidth: '180',
  link: 'https://www.google.com',
  titlecolor: '#43464E',
  titlefontsize: '14px',
  boxheight: '100px',
  boxwidth: '200px',
};
