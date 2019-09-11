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
    new NotebooksComponent(this.eventManager);

    this.dispatchInitialEvents();
    this.initRouters();
  }

  /**
   * Remember to add a hash in http:// to the paths
   */
  initRouters() {
    console.log(AppRouter.getPathToNotebooks());

    this.router
      .on(AppRouter.getPathToNotebooks(), () => {
        console.log('#1');
        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
      })
      .on(AppRouter.getPathToNotebook(), (params, query) => {
        console.log('#2');
        new NotesComponent(this.eventManager, params, query);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTES);
      })
      .on(AppRouter.getPathToNote(), (params, query) => {
        console.log('#3');
        new NoteContentComponent(this.eventManager, params, query);

        this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTE);
      })
      .resolve();
  }

  dispatchInitialEvents() {
    this.dispatchNotebooksListEvents();
    this.dispatchNotesListEvents();
  }

  dispatchNotebooksListEvents() {
    if (AppRouter.isNotebooksList) {
      console.log('isNotebooksList');
      this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTEBOOKS);
    }
  }

  dispatchNotesListEvents() {
    if (!AppRouter.isNotesList) {
      return null;
    }

    console.log('isNoteContent');
    new NoteContentComponent(this.eventManager);
    this.eventManager.dispatchEvent(APP_EVENTS.SHOW_NOTE);
  }
}

new AppCore();
