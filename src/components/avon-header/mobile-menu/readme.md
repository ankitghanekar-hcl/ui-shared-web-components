# mobile-menu

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute    | Description | Type    | Default     |
| -------------- | ------------ | ----------- | ------- | ----------- |
| `cartCount`    | `cart-count` |             | `any`   | `undefined` |
| `categoryList` | --           |             | `any[]` | `[]`        |
| `settings`     | `settings`   |             | `any`   | `null`      |

## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `showCart` |             | `CustomEvent<void>` |

## Dependencies

### Used by

- [avon-header](..)

### Depends on

- [ui-link](../../ui-link)
- ui-icon
- [ui-button](../../ui-button)
- [search-bar](../search-bar)

### Graph

```mermaid
graph TD;
  mobile-menu --> ui-link
  mobile-menu --> ui-icon
  mobile-menu --> ui-button
  mobile-menu --> search-bar
  search-bar --> ui-textbox
  search-bar --> ui-button
  search-bar --> ui-icon
  avon-header --> mobile-menu
  style mobile-menu fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
