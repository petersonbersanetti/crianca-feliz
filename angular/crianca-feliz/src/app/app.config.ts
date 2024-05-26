import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './services/Auth/auth-service.service';
import { ChildServiceService } from './services/Child/child-service.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService,
    ChildServiceService,
    importProvidersFrom(HttpClientModule)
  ]
};
