import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  cart: null,
  wishlist: null,
});

export { onChange };

export default state;
