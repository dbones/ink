import { PLATFORM } from "aurelia-framework";

export class App {
  
  configureRouter(config) {
    config.title = 'Aurelia Todo example';
    config.map([
      { route: ['', 'home','api-catalog'], name: 'home', moduleId: PLATFORM.moduleName('views/api-catalog') },
      { route: ['api'], name: 'api', moduleId: PLATFORM.moduleName('views/api') },
      { route: ['about'], name: 'about', moduleId: PLATFORM.moduleName('views/about') }
    ]);
  }

}