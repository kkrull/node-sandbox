import { RequestMock, Selector } from 'testcafe';

const requestHook = RequestMock()
  .onRequestTo(new RegExp('https://httpbin.org/get'))
  .respond({ answer: 42 }, 200, {
    'access-control-allow-origin': '*'
  });

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
