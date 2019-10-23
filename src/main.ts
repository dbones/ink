import { Aurelia } from 'aurelia-framework'
import * as environment from '../config/environment.json';
import { PLATFORM } from 'aurelia-pal';
import 'materialize-css';
import 'whatwg-fetch';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll())
    .plugin(PLATFORM.moduleName('aurelia-configuration'));

  // remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
  //Bluebird.config({ warnings: { wForgottenReturn: false } });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
