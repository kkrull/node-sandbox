export abstract class NavigationService {
  abstract changeLocationTo(url: URL): void;
}

export class WindowNavigationService extends NavigationService {
  changeLocationTo(url: URL): void {
    window.location.href = url.href;
  }
}
