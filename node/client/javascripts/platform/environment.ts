// Angular 2
import { enableProdMode } from '@angular/core';

// Environment Providers
let PROVIDERS = [];

// TODO: 
if ('<%= ENV %>' === 'production' || '<%= TARGET_DESKTOP_BUILD %>' === 'true') {
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
