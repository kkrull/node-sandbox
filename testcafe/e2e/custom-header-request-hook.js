import { RequestHook } from 'testcafe';

export default class CustomHeaderRequestHook extends RequestHook {
  constructor(filterRules, options, headers) {
    super(filterRules, options);
    this.headers = headers;
  }

  async onRequest(event) {
    Object.keys(this.headers).forEach(header => {
      event.requestOptions.headers[header] = this.headers[header];
    });
  }

  async onResponse(event) { }
}
