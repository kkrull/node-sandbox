import { InjectionToken } from '@angular/core';
import { ExternalUrlResolve } from './external-url.resolve';

export const ExternalUrlResolveToken = new InjectionToken<ExternalUrlResolve>('ExternalUrlResolve');
