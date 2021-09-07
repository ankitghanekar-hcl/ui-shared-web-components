# avon-heading

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description | Type      | Default                                                                                     |
| ------------- | ------------- | ----------- | --------- | ------------------------------------------------------------------------------------------- |
| `btndisable`  | `btndisable`  |             | `boolean` | `false`                                                                                     |
| `btnlabel`    | `btnlabel`    |             | `string`  | `'ADD TO BAG'`                                                                              |
| `cardbgcolor` | `cardbgcolor` |             | `string`  | `undefined`                                                                                 |
| `cardheight`  | `cardheight`  |             | `string`  | `undefined`                                                                                 |
| `cardwidth`   | `cardwidth`   |             | `string`  | `undefined`                                                                                 |
| `heading`     | `heading`     |             | `string`  | `'Product Title'`                                                                           |
| `image`       | `image`       | The label   | `string`  | `'https://www.shopwithmyrep.co.uk//assets/en-gb/images/product/prod_1223000_1_613x613.jpg'` |
| `imgalt`      | `imgalt`      |             | `string`  | `'sample_image'`                                                                            |
| `imgheight`   | `imgheight`   |             | `string`  | `'326'`                                                                                     |
| `imgwidth`    | `imgwidth`    |             | `string`  | `'216'`                                                                                     |
| `price`       | `price`       |             | `string`  | `'0'`                                                                                       |

## Dependencies

### Depends on

- [ui-box_container](../ui-box_container)
- [ui-img](../ui-img)
- [ui-heading](../ui-heading)
- [ui-label](../ui-label)
- [ui-button](../ui-button)

### Graph

```mermaid
graph TD;
  ui-product_card --> ui-box_container
  ui-product_card --> ui-img
  ui-product_card --> ui-heading
  ui-product_card --> ui-label
  ui-product_card --> ui-button
  style ui-product_card fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
