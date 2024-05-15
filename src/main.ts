// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 import { bootstrapApplication } from '@angular/platform-browser';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
// import { RootModule } from './root.module';
import { hmrBootstrap } from './hmr';
import { AppComponent } from './app/app.component';

// import 'moment/min/locales.min';
// import 'moment-timezone';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent)
 .catch((err) => console.error(err));

 export class main {}

// const bootstrap = () => {
//     return platformBrowserDynamic().bootstrapModule(RootModule);
// };

/* "Hot Module Replacement" is enabled as described on
 * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
 */

// if (environment.hmr) {
//     if (module['hot']) {
//         hmrBootstrap(module, bootstrap); // HMR enabled bootstrap
//     } else {
//         console.error('HMR is not enabled for webpack-dev-server!');
//         console.log('Are you using the --hmr flag for ng serve?');
//     }
// } else {
//     bootstrap(); // Regular bootstrap
// }
