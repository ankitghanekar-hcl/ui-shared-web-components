// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Image',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiImage = ({ src, width, alt, height }) => {
  return `
  <ui-img
      src="${src}"
      width="${width}"
      alt="${alt}"
      height="${height}">
  </ui-img>`;
};

UiImage.args = {
  src: 'https://www.shopwithmyrep.co.uk/assets/en-gb/images/product/prod_1223000_1_613x613.jpg',
  width: 200,
  height: 200,
  alt: 'sample_image',
};

UiImage.argTypes = {
  width: {
    control: {
      type: 'range',
      min: 100,
      max: 800,
      step: 50,
    },
  },
  height: {
    control: {
      type: 'range',
      min: 100,
      max: 800,
      step: 50,
    },
  },
};
