// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Textbox',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiTextbox = ({ placeholder, disabled, width, shape, usecase }) => {
  return `
  <ui-textbox
      placeholder="${placeholder}"
      shape="${shape}"
      usecase="${usecase}"
      width="${width}"
      ${disabled && 'disabled'}>
  </ui-textbox>`;
};

UiTextbox.args = {
  placeholder: 'Please enter something',
  shape: 'full',
  usecase: 'search',
  width: 'smallwidth',
  disabled: false,
};

UiTextbox.argTypes = {
  width: {
    options: ['fullwidth', 'mediumwidth', 'smallwidth'],
    control: 'select',
  },
  shape: {
    options: ['full', 'round', 'smooth'],
    control: 'select',
  },
  usecase: {
    options: ['search', 'loginform'],
    control: 'select',
  },
  disabled: { control: 'boolean' },
};
