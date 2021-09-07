// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Link',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiLink = ({ text, link, color, textdecoration, fontsize, fontfamily, fontweight }) => {
  return `
  <ui-link
      color="${color}"
      link="${link}"
      textdecoration="${textdecoration}"
      fontfamily="${fontfamily}"
      fontweight="${fontweight}"
      fontsize="${fontsize}px">
    <span>${text}</span>
  </ui-link>`;
};

UiLink.args = {
  text: 'Example',
  link: 'http://example.com',
  color: '#7f28c4',
  textdecoration: 'none',
  fontsize: 24,
  fontfamily: 'Montserrat,Arial',
  fontweight: 100,
};

UiLink.argTypes = {
  color: { control: 'color' },
  textdecoration: {
    options: ['none', 'underline', 'overline'],
    control: 'select',
  },
  fontsize: {
    control: {
      type: 'range',
      min: 8,
      max: 48,
      step: 4,
    },
  },
  fontweight: {
    control: {
      type: 'range',
      min: 100,
      max: 900,
      step: 100,
    },
  },
};
