import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  cart: null,
  wishlist: null,
  cartShown: false,
  wishlistShown: false,
});

export { onChange };

export default state;
