// Angular 2
import { enableProdMode } from '@angular/core';

// Environment Providers
let PROVIDERS = [];

if ('production' === process.env.ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
  ];
}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
