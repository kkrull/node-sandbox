import CustomHeaderRequestHook from './custom-header-request-hook';
import RestTestPage from './resttest.page';
import UrlSubstitutionRequestHook from './url-substitution-request-hook';

const headerHook = new CustomHeaderRequestHook(['https://httpbin.org/get'], null, {
  'X-Custom-Header': 'Swordfish',
});

const urlHook = new UrlSubstitutionRequestHook(['https://httpbin.org/get'], null, {
  host: 'api.reverb.com',
  hostname: 'api.reverb.com',
  path: '/api/categories',
  url: 'https://api.reverb.com/api/categories'
}, {
  'Accept': 'application/hal+json',
  'Accept-Version': '3.0',
  'Content-Type': 'application/json',
  'Host': 'api.reverb.com'
});

fixture('REST Test')
  .page('https://resttesttest.com/');

test
  .meta({ wip: 'true' })
  .requestHooks(headerHook)
  ('Can add a header to an async request', async t => {
    const restPage = new RestTestPage();
    await restPage.typeUrl('https://httpbin.org/get');
    await restPage.clickSubmit();

    await t
      .expect(restPage.responseStatus.textContent).contains('HTTP')
      .expect(restPage.responseStatus.textContent).contains('200 OK');
  });

test
  .meta({ wip: 'true' })
  .requestHooks(urlHook)
  ('Can re-route an async request to another host', async t => {
    const restPage = new RestTestPage();
    await restPage.typeUrl('https://httpbin.org/get');
    await restPage.clickSubmit();

    await t
      .expect(restPage.responseStatus.textContent).contains('HTTP')
      .expect(restPage.responseStatus.textContent).contains('200 OK');
  });
