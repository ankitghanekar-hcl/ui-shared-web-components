import { r as registerInstance, h } from './index-304a2a43.js';

const storyWrapperCss = ':host{display:block}';

const StoryWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const props = JSON.parse(decodeURI(this.props));
    const Tag = this.tag;
    return h(Tag, Object.assign({}, props));
  }
};
StoryWrapper.style = storyWrapperCss;

export { StoryWrapper as wrap_story };
