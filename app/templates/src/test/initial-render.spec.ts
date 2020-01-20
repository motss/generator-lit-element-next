import { MyElement } from '../my-element.js';

import '../my-element.js';
import { getShadowInnerHTML, getTestName } from './test-helpers.js';

const assert = chai.assert;
const localName = 'my-element';
let element: MyElement;

describe(getTestName(localName), () => {
  beforeEach(() => {
    element = document.createElement(localName) as MyElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders initial content', async () => {
    await element.updateComplete;

    const h1El = element.shadowRoot!.querySelector('h1')!;
    assert.strictEqual(getShadowInnerHTML(h1El), 'Hello, World!');
  });

  it(`has property 'name=Hello, World!'`, async () => {
    await element.updateComplete;

    assert.strictEqual(element.name, 'Hello, World!');
  });

});
