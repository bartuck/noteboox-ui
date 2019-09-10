// CORE
import { AppInstallPrompt } from './core/app-install-prompt.core';
import { AppRouter } from './core/app-router.core';
import { AppEventManager } from './core/app-event-manager.core';
import { NotebooksComponent } from "./components/notebooks.component";
import { APP_EVENTS } from "./core/const/app-events.const";
import { APP_ROUTER } from "./core/const/app-router.const";
import { NotesComponent } from "./components/notes.component";

class AppCore {
  constructor() {
    this.installPrompt = new AppInstallPrompt();
    this.eventManager = new AppEventManager();
    this.notebooksComponent = new NotebooksComponent(this.eventManager);
    this.router = new AppRouter().router;

    this.dispachInitialEvents();
    this.initRouters();
  }

  /**
   * Remember to add a hash in http:// to the paths
   */
  initRouters() {
    this.router
      // notebooks
      .on(APP_ROUTER.NOTEBOOKS.PATH, () => {
        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
      })
      // notebooks/123
      .on(`${APP_ROUTER.NOTEBOOKS.PATH}/${APP_ROUTER.NOTEBOOKS.PARAMS.ID}`, (params, query) => {
        this.notesComponent = new NotesComponent(this.eventManager, params, query);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTES);
      })
      .resolve();
  }

  dispachInitialEvents() {
    this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
  }
}

new AppCore();
