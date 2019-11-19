import { RequestHook, Selector } from 'testcafe';

class CustomHeaderRequestHook extends RequestHook {
  constructor(addHeaderName, addHeaderValue, filterRules, options) {
    super(filterRules, options);
    this.addHeaderName = addHeaderName;
    this.addHeaderValue = addHeaderValue;
  }

  async onRequest(event) {
    console.log('[CustomHeaderRequestHook]', event.requestOptions.url);
    event.requestOptions.headers[this.addHeaderName] = this.addHeaderValue;
  }

  async onResponse(event) { }
}

const requestHook = new CustomHeaderRequestHook('X-Custom-Header', 'Swordfish', ['https://httpbin.org/get']);

fixture('REST Test')
  .page('https://resttesttest.com/')
  .requestHooks(requestHook);

test('Makes an async request', async t => {
  const urlInput = Selector('#urlvalue');
  const submitButton = Selector('#submitajax');
  await t
    .typeText(urlInput, 'https://httpbin.org/get', { replace: true })
    .click(submitButton);

  const responseStatus = Selector('#statuspre');
  await t
    .expect(responseStatus.textContent).contains('HTTP')
    .expect(responseStatus.textContent).contains('200 OK');

  const statusText = await responseStatus.textContent;
  console.log('Final status', statusText);
});
