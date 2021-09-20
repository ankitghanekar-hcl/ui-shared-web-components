# cart-sidebar

<!-- Auto Generated Below -->


## Events

| Event             | Description | Type                                                                                                                                                  |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cart:removeItem` |             | `CustomEvent<{ id: string; productId: string; name: string; price: { value: { centAmount: number; }; }; variant: { images: { url: string; }[]; }; }>` |


## Dependencies

### Depends on

- ui-modal
- ui-cart_product

### Graph
```mermaid
graph TD;
  cart-sidebar --> ui-modal
  cart-sidebar --> ui-cart_product
  ui-modal --> ui-button
  ui-cart_product --> ui-img
  ui-cart_product --> ui-link
  ui-cart_product --> ui-button
  style cart-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
