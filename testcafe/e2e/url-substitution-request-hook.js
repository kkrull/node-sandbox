import { RequestHook } from 'testcafe';

export default class UrlSubstitutionRequestHook extends RequestHook {
  constructor(filterRules, options, requestOptions, headers) {
    super(filterRules, options);
    this.requestOptions = requestOptions;
    this.headers = headers;
  }

  async onRequest(event) {
    const request = event.requestOptions;
    Object.keys(this.requestOptions).forEach(option => {
      event.requestOptions[option] = this.requestOptions[option];
    });

    Object.keys(this.headers).forEach(header => {
      event.requestOptions.headers[header] = this.headers[header];
    });

    // console.log('[UrlSubstitutionRequestHook] out request', event.requestOptions);
  }

  async onResponse(event) { }
}
