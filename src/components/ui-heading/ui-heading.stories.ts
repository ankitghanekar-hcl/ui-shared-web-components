// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Heading',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiHeading = ({ label, level }) => {
  return `<ui-heading label="${label}" level="${level}" />`;
};

UiHeading.args = {
  label: 'Ui Heading',
  level: 'h1',
};

UiHeading.argTypes = {
  level: {
    options: ['h1', 'h2', 'h3'],
    control: 'select',
  },
};
