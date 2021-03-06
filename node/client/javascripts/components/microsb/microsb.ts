/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
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
  encapsulation: ViewEncapsulation.None,
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

  ngOnInit() {
    console.log('Initial microsb app State');
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
