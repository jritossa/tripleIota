import { bootstrap }    from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http'

import { AppComponent } from './app/app.component'
import { appRouterProviders } from './app/app.routes'

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders]);
