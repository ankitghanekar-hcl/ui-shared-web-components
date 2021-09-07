// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Label',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiLabel = ({ label, color, fontfamily, fontsize, fontweight }) => {
  return `
  <ui-label
      label="${label}"
      color="${color}"
      fontfamily="${fontfamily}"
      fontweight="${fontweight}"
      fontsize="${fontsize}px">
  </ui-label>`;
};

UiLabel.args = {
  label: 'Text',
  color: 'black',
  fontfamily: 'Arial',
  fontsize: 24,
  fontweight: 400,
};

UiLabel.argTypes = {
  color: { control: 'color' },
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
