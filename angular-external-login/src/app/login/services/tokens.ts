import { InjectionToken } from '@angular/core';
import { ChangeToExternalSignInUrl } from './change-to-sign-in-url.resolve';

export const ExternalUrlResolverToken = new InjectionToken<ChangeToExternalSignInUrl>('ChangeToExternalUrl');
