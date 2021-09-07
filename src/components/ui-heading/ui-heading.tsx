import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-heading',
  styleUrl: 'ui-heading.css',
  shadow: true,
})
export class UiHeading {
  /**
   * The label
   */
  @Prop() label: string;
  @Prop() level?: 'h1' | 'h2' | 'h3' = 'h1';

  render() {
    return this.level === 'h1' ? <h1>{this.label}</h1> : this.level === 'h2' ? <h2>{this.label}</h2> : <h3>{this.label}</h3>;
  }
}
