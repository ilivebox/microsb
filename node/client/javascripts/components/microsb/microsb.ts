/*
 * Angular 2 decorators and services
 */
import { Component } from "angular2/core";
import { RouteConfig } from "angular2/router";
import { Home } from "../home";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'microsb',
  pipes: [],
  providers: [],
  directives: [],
  styles: [require('./microsb.scss')],
  template: require('./microsb.html')
})
@RouteConfig([
  { path: '/', name: 'Index', component: Home, useAsDefault: true },
  { path: '/home', name: 'Home', component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!../about')('About') },
])
export class App {
  constructor() {
    // Do stuff
  }
}
