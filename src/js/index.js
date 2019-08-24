// CORE
import { AppInstallPrompt } from './core/app-install-prompt.core';
import { AppRouter } from './core/app-router.core';
import { AppEventManager } from './core/app-event-manager.core';

class AppCore {
  constructor() {
    this.installPrompt = new AppInstallPrompt();
    this.eventManager = new AppEventManager();
    this.router = new AppRouter().router;
    this.testRouter();
  }

  testRouter() {
    console.log('#testRouter');
    this.router
      .on('products/list', function () {
        console.log('http://localhost:3000/#products/list');
      })
      .resolve();
  }
}

new AppCore();
