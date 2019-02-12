import { MyElement } from '../my-element.js';

import '../my-element.js';
import { getShadowInnerHTML } from './test-helpers';

const assert = chai.assert;
let element: MyElement;

describe('my-element', () => {
  beforeEach(() => {
    element = document.createElement('my-element') as MyElement;
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
