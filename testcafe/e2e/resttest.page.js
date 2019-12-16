import { Selector, t } from 'testcafe';

export default class RestTestPage {
  constructor() {
    this.responseStatus = Selector('#statuspre');
    this.submitButton = Selector('#submitajax');
    this.urlInput = Selector('#urlvalue');
  }

  clickSubmit() {
    return t.click(this.submitButton);
  }

  typeUrl(url) {
    return t.typeText(this.urlInput, url, { replace: true });
  }
}
