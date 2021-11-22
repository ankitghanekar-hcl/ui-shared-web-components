# desktop-menu

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description | Type     | Default |
| --------------- | ---------------- | ----------- | -------- | ------- |
| `cartCount`     | `cart-count`     |             | `number` | `0`     |
| `data`          | `data`           |             | `any`    | `null`  |
| `settings`      | `settings`       |             | `any`    | `null`  |
| `wishlistCount` | `wishlist-count` |             | `number` | `0`     |

## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `showCart` |             | `CustomEvent<void>` |

## Dependencies

### Used by

- [avon-header](..)

### Depends on

- [search-bar](../search-bar)
- ui-button
- ui-link
- [category-nav](../category-nav)

### Graph

```mermaid
graph TD;
  desktop-menu --> search-bar
  desktop-menu --> ui-button
  desktop-menu --> ui-link
  desktop-menu --> category-nav
  search-bar --> ui-textbox
  search-bar --> ui-button
  category-nav --> ui-link
  avon-header --> desktop-menu
  style desktop-menu fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
