import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { FORM_PROVIDERS } from 'angular2/common';

import '../stylesheets/app.scss';

import { Api } from './services/api/api';
import { Dashboard } from './dashboard';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'microsb', // <microsb></microsb>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  template: require('./index.html')
})
@RouteConfig([
  { path: '/', name: 'Dashboard', component: Dashboard, useAsDefault: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  url: string = 'https://microsb.herokuapp.com';

  constructor(public api: Api) {
  }
}
