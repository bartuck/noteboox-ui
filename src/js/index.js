// CORE
import { AppInstallPrompt } from './core/app-install-prompt.core';
import { AppRouter } from './core/app-router.core';
import { AppEventManager } from './core/app-event-manager.core';
import { APP_EVENTS } from "./core/const/app-events.const";

// COMPONENTS
import { NotebooksComponent } from "./components/notebooks.component";
import { NotesComponent } from './components/notes.component';
import { NoteContentComponent } from './components/note-content/note-content.component';

class AppCore {
  constructor() {
    this.eventManager = new AppEventManager();
    this.router = new AppRouter().router;

    new AppInstallPrompt();

    this.initRouters();
  }

  /**
   * Remember to add a hash in http:// to the paths
   */
  initRouters() {
    this.router
      .on(AppRouter.getPathToNotebooks(), () => {
        new NotebooksComponent(this.eventManager);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
      })
      .on(AppRouter.getPathToNotebook(), (params, query) => {
        new NotebooksComponent(this.eventManager);
        new NotesComponent(this.eventManager, params, query);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTES);
      })
      .on(AppRouter.getPathToNote(), (params, query) => {
        new NotebooksComponent(this.eventManager);
        new NotesComponent(this.eventManager, params, query);
        new NoteContentComponent(this.eventManager, params, query);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTES);
        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTE);
      })
      .resolve();
  }
}

new AppCore();
