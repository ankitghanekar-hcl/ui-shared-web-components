// @ts-ignore
import readme from './readme.md';

export default {
  title: 'UI Box Container',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const UiBoxContainer = ({ width, backgroundcolor, height, display }) => {
  return `
  <ui-box_container
      width="${width}"
      backgroundcolor="${backgroundcolor}"
      height="${height}"
      display="${display}">
    Hello
  </ui-box_container>`;
};

UiBoxContainer.args = {
  width: '100%',
  backgroundcolor: 'blue',
  height: '300px',
  display: 'block',
};

UiBoxContainer.argTypes = {
  backgroundcolor: { control: 'color' },
  display: {
    options: ['block', 'flex', 'grid', 'none'],
    control: 'select',
  },
};
