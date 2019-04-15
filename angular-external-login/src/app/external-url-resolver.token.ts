import { InjectionToken } from '@angular/core';
import { ChangeToExternalUrl } from './change-to-external-url.resolve';

export const ExternalUrlResolverToken = new InjectionToken<ChangeToExternalUrl>('ExternalUrlResolver');
