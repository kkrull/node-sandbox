import { Selector } from 'testcafe';

fixture('REST Test')
  .page('https://resttesttest.com/');

test('Makes an async request', async t => {
  await t
    .typeText('#urlvalue', 'https://httpbin.org/get', { replace: true })
    .click('#submitajax');

  const status = Selector('#statuspre');
  await t
    .expect(status.textContent).contains('HTTP')
    .expect(status.textContent).contains('200 OK');

  const finalStatus = await status.textContent;
  console.log('Final status', finalStatus);
});
