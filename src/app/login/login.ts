import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  directives: [
    ROUTER_DIRECTIVES,
  ],
  selector: '[login]',
  host: {
    class: 'login-page app'
  },
  template: require('./login.html')
})
export class LoginPage {
}
