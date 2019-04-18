import { NavigationService } from './login.component';

export class WindowNavigationService extends NavigationService {
  changeLocationTo(url: URL): void {
    window.location.href = url.href;
  }
}
