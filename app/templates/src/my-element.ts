import {
  customElement,
  html,
  LitElement,
  property,
} from '@polymer/lit-element';

@customElement()
export class MyElement extends LitElement {
  static get is() { return 'my-element'; }

  @property({ type: String })
  public name: string = 'Hello, World!';

  protected render() {
    return html`
      <style>
        :host {
          display: block;
        }

        * {
          box-sizing: border-box;
        }

      </style>

      <h1>${this.name}</h1>
    `;
  }
}
