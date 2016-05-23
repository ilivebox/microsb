// https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/main.browser.ts
/*
 * Providers provided by Angular
 */
import { bootstrap } from "@angular/platform-browser-dynamic";

/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import { DIRECTIVES, PIPES, PROVIDERS } from "./javascripts/platform/browser";
import { ENV_PROVIDERS } from "./javascripts/platform/environment";

/*
 * App Component
 * our top level component that holds all of our components
 */
import "./assets/stylesheets/main.scss";
import { App } from "./javascripts/components/microsb";

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
function main(initialState = {}): Promise<any> {
  return bootstrap(App, [
      ...ENV_PROVIDERS,
      ...PROVIDERS,
      ...DIRECTIVES,
      ...PIPES
    ]
  ).catch(err => console.error(err));
}

// bootstrap when document is ready
document.addEventListener('DOMContentLoaded', () => main());
