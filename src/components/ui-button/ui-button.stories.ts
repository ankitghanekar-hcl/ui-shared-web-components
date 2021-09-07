// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Button',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiButton = ({ color, txt, disabled, size, shape, width }) => {
  return `<ui-button color="${color}" size="${size}" shape="${shape}" width="${width}" ${disabled && 'disabled'}>
    <span>${txt}</span>
  </ui-button>`;
};

UiButton.args = {
  txt: 'Ui Button',
  color: 'primary',
  size: 'large',
  width: 'smallwidth',
  shape: 'full',
  disabled: false,
};

UiButton.argTypes = {
  color: {
    options: ['primary', 'secondary', 'clear', 'light'],
    control: 'select',
  },
  disabled: { control: 'boolean' },
  size: {
    options: ['large', 'medium', 'small'],
    control: 'select',
  },
  shape: {
    options: ['full', 'round', 'smooth', 'text'],
    control: 'select',
  },
  width: {
    options: ['fullwidth', 'mediumwidth', 'smallwidth'],
    control: 'select',
  },
};
