import Navigo from '../../../node_modules/navigo/lib/navigo.es';
import { APP_ROUTER } from "./const/app-router.const";


export class AppRouter {
  constructor() {
    const root = null;
    const useHash = true;

    this.router = new Navigo(root, useHash);
  }

  static get isNotebooksList() {
    const hash = window.location.hash;
    const notebookFragment = `${APP_ROUTER.NOTEBOOK.PATH}/`;

    return hash.indexOf(notebookFragment) > -1;
  }

  static get isNotesList() {
    const hash = window.location.hash;
    const notesFragment = `${APP_ROUTER.NOTE.PATH}/`;

    return hash.indexOf(notesFragment) > -1;
  }

  static getPathToNotebooks(useHash) {
    let path = `${APP_ROUTER.NOTEBOOK.PATH}`;

    if (useHash) {
      path = `#${path}`;
    }

    return path;
  }

  static getPathToNotebook(id) {
    if (id) {
      return `#${APP_ROUTER.NOTEBOOK.PATH}/${id}`;
    }

    return `${APP_ROUTER.NOTEBOOK.PATH}/:${APP_ROUTER.NOTEBOOK.PARAMS.ID}`;
  }

  static getPathToNote(id, notebookId) {
    if (id && notebookId) {
      const notebookPath = AppRouter.getPathToNotebook(notebookId);

      return `${notebookPath}/${APP_ROUTER.NOTE.PATH}/${id}`;
    }

    const notebookPath = AppRouter.getPathToNotebook();

    return `${notebookPath}/${APP_ROUTER.NOTE.PATH}/:${APP_ROUTER.NOTE.PARAMS.ID}`;
  }
}
