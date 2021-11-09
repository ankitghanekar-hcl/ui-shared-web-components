import { r as registerInstance, e as createEvent, h } from './index-304a2a43.js';

const uiModalCss =
  ':host{display:block}.wrapper{position:fixed;left:0;top:0;width:100%;height:100%;z-index:3}.wrapper:before{content:" ";display:block;position:absolute;height:100%;top:0;left:0;right:0;background:rgba(0, 0, 0, 0.5)}.visible{opacity:1;visibility:visible}.modal{font-family:"Montserrat", sans-serif;font-size:14px;padding:10px 10px 5px 10px;background-color:#fff;border-radius:2px;box-sizing:border-box}.center{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.left{position:fixed;left:0;height:100%;width:100%}@media (min-width: 1024px){.left{width:var(--sidebar-width, 25.5rem)}}.right{position:fixed;right:0;height:100%;width:100%;bottom:0}@media (min-width: 1024px){.right{width:var(--sidebar-width, 25.5rem)}}.top{position:fixed;z-index:1;left:0;top:0;width:100%}.bottom{position:fixed;bottom:0;width:100%}.title{font-size:18px;padding:5px;padding-right:14rem;position:inherit;width:100%;background:white;z-index:15;top:0}.content{height:80%;margin-top:7rem;position:relative;z-index:2;visibility:inherit}.button-container{display:flex;flex-direction:column;position:sticky;z-index:15;width:100%;box-sizing:border-box;box-shadow:4px 0px 4px 8px rgba(0, 0, 0, 0.2);justify-content:space-between;bottom:0;background:white;height:30%;font-size:18px}.button{width:90%;padding:1rem;--c-background:#e2197c}button{margin-left:5px;min-width:80px;background-color:#848e97;border-color:#848e97;border-style:solid;border-radius:2px;padding:15px;color:white;cursor:pointer}button:hover{background-color:#6c757d;border-color:#6c757d}.modal_none{display:none}.close{position:inherit;right:1.5rem;z-index:16}.close-button{background-color:red;--c-button-text:green}';

const UiModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, 'modal', 7);
    /**
     * Title color
     */
    this.titlecolor = 'black';
    /**
     * Title font-family
     */
    this.titlefontfamily = 'Montserrat,Arial';
    /**
     * Title font-size
     */
    this.titlefontsize = '18.72px';
    /**
     * Title font-weight
     */
    this.titlefontweight = '100';
    /**
     * height
     */
    this.height = '100%';
    /**
     * Button color
     */
    this.btncolor = 'secondary';
    /**
     * Position of modal
     */
    this.position = 'right';
    /**
     * open
     */
    this.open = false;
    /**
     * button-label
     */
    this.buttonlabel = 'Go back to shopping';
    this.handleCloseClick = () => {
      this.open = false;
      this.closeCallback && this.closeCallback();
      this.toggle.emit({ modalId: this.modalId });
    };
    this.handleBtnClick = () => {
      this.open = false;
      this.closeCallback && this.closeCallback();
      this.toggle.emit({ modalId: this.modalId });
    };
  }
  render() {
    return h(
      'div',
      { class: this.open ? 'wrapper visible' : 'modal_none' },
      h(
        'div',
        { class: `modal ${this.position}`, style: { width: this.width, height: this.height } },
        h(
          'div',
          { class: 'close' },
          h(
            'ui-button',
            { shape: 'text', size: 'small', color: 'secondary', onClick: this.handleCloseClick },
            h('div', { class: 'close-icon' }, h('ui-icon', { icon: 'close', size: '18', color: 'white' })),
          ),
        ),
        h(
          'div',
          { class: 'title' },
          h('slot', { name: 'title' }),
          h('slot', { name: 'total' }),
          h(
            'span',
            { style: { 'color': this.titlecolor, 'font-weight': this.titlefontweight, 'font-size': this.titlefontsize, 'font-family': this.titlefontfamily } },
            this.modaltitle && this.modaltitle,
          ),
        ),
        h('div', { class: 'content' }, h('slot', null)),
        h(
          'div',
          { class: 'button-container' },
          h('slot', { name: 'bottom' }),
          h('ui-button', { class: 'button', color: this.btncolor, width: 'fullwidth', onClick: this.handleBtnClick }, h('h3', null, this.buttonlabel)),
        ),
      ),
    );
  }
};
UiModal.style = uiModalCss;

export { UiModal as ui_modal };
