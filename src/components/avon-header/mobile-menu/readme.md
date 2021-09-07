# mobile-menu

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute    | Description | Type    | Default     |
| -------------- | ------------ | ----------- | ------- | ----------- |
| `cartCount`    | `cart-count` |             | `any`   | `undefined` |
| `categoryList` | --           |             | `any[]` | `[]`        |
| `settings`     | `settings`   |             | `any`   | `null`      |

## Dependencies

### Used by

- [avon-header](..)

### Depends on

- ui-icon
- [ui-link](../../ui-link)
- [search-bar](../search-bar)

### Graph

```mermaid
graph TD;
  mobile-menu --> ui-icon
  mobile-menu --> ui-link
  mobile-menu --> search-bar
  search-bar --> ui-textbox
  search-bar --> ui-button
  search-bar --> ui-icon
  avon-header --> mobile-menu
  style mobile-menu fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
