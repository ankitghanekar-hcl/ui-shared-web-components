# avon-header

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute | Description | Type  | Default     |
| --------- | --------- | ----------- | ----- | ----------- |
| `content` | `content` |             | `any` | `undefined` |

## Dependencies

### Depends on

- [top-bar](top-bar)
- [mobile-menu](mobile-menu)
- [desktop-menu](desktop-menu)

### Graph

```mermaid
graph TD;
  avon-header --> top-bar
  avon-header --> mobile-menu
  avon-header --> desktop-menu
  top-bar --> ui-link
  mobile-menu --> ui-link
  mobile-menu --> ui-img
  mobile-menu --> ui-icon
  mobile-menu --> ui-button
  mobile-menu --> search-bar
  search-bar --> ui-textbox
  search-bar --> ui-button
  search-bar --> ui-icon
  desktop-menu --> search-bar
  desktop-menu --> ui-button
  desktop-menu --> ui-icon
  desktop-menu --> ui-link
  desktop-menu --> category-nav
  category-nav --> ui-link
  style avon-header fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
