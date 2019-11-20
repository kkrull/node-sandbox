import CustomHeaderRequestHook from './custom-header-request-hook';
import RestTestPage from './resttest.page';

const requestHook = new CustomHeaderRequestHook(['https://httpbin.org/get'], null, {
  'X-Custom-Header': 'Swordfish',
});

fixture('REST Test')
  .page('https://resttesttest.com/')
  .requestHooks(requestHook);

test.meta({ wip: 'true' })
  ('Makes an async request', async t => {
    const restPage = new RestTestPage();
    await restPage.typeUrl('https://httpbin.org/get');
    await restPage.clickSubmit();

    await t
      .expect(restPage.responseStatus.textContent).contains('HTTP')
      .expect(restPage.responseStatus.textContent).contains('200 OK');

    const statusText = await restPage.responseStatusText;
    console.log('Final status', statusText);
  });
