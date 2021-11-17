// @ts-ignore
import readme from './readme.md';

export default {
  title: 'Ui Modal',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiModal = ({ modaltitle, titlecolor, titlefontfamily, titlefontsize, titlefontweight, width, height, btncolor, position, open, buttonlabel }) => {
  return `
  <ui-modal
      modaltitle="${modaltitle}"
      titlecolor="${titlecolor}"
      titlefontfamily="${titlefontfamily}"
      titlefontsize="${titlefontsize}px"
      titlefontweight="${titlefontweight}"
      width="${width}px"
      height="${height}"
      btncolor="${btncolor}"
      position="${position}"
      buttonlabel="${buttonlabel}"
      ${open && 'open'}>
  </ui-modal>`;
};

UiModal.args = {
  modaltitle: 'Modal title',
  titlecolor: 'black',
  titlefontfamily: 'Montserrat,Arial',
  titlefontsize: 24,
  titlefontweight: 400,
  buttonlabel: 'Go back to shopping',
  width: 300,
  height: '100%',
  btncolor: 'secondary',
  position: 'right',
  open: false,
};

UiModal.argTypes = {
  btncolor: {
    options: ['primary', 'secondary', 'clear', 'light'],
    control: 'select',
  },
  position: {
    options: ['center', 'left', 'right', 'top', 'bottom'],
    control: 'select',
  },
  titlecolor: { control: 'color' },
  titlefontsize: {
    control: {
      type: 'range',
      min: 8,
      max: 48,
      step: 4,
    },
  },
  open: { control: 'boolean' },
  width: {
    control: {
      type: 'range',
      min: 100,
      max: 800,
      step: 50,
    },
  },
  titlefontweight: {
    control: {
      type: 'range',
      min: 100,
      max: 900,
      step: 100,
    },
  },
};
