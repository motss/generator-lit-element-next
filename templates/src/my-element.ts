import {
  css,
  customElement,
  html,
  LitElement,
  property,
} from 'lit-element';

@customElement(MyElement.is)
export class MyElement extends LitElement {
  static get is() { return 'my-element'; }

  public static styles = [
    css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    `,
  ];

  @property({ type: String })
  public name: string = 'Hello, World!';

  protected render() {
    return html`
    <h1>${this.name}</h1>
    `;
  }
}
