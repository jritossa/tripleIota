import {RouterConfig, provideRouter} from '@angular/router'
import {LandingPage} from './landing/landing.page'

const routes:RouterConfig = [
    {
        path: '',
        component: LandingPage
    }
];

export const appRouterProviders = [
    provideRouter(routes)
]