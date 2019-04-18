export abstract class NavigationService {
  abstract changeLocationTo(url: URL): void;
  abstract currentUrl(): URL;
}

export class WindowNavigationService extends NavigationService {
  changeLocationTo(url: URL): void {
    window.location.href = url.href;
  }

  currentUrl(): URL {
    return new URL(window.location.href);
  }
}
