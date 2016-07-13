import { bootstrap }    from '@angular/platform-browser-dynamic'
import { provideRouter } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http'

import { AppComponent } from './app.component'
import { appRouterProviders } from './app.routes'

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders])
