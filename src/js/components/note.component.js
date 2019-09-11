import { APP_ROUTER } from "../core/const/app-router.const";
import { AppRouter } from "../core/app-router.core";

export class NoteComponent {
  constructor(eventManager, noteData, notebookId) {
    this.eventManager = eventManager;
    this.title = noteData.title;
    this.id = noteData.id;
    this.notebookId = notebookId;
    console.log('Hello NoteComponent');
  }

  get pathToNote() {
    return AppRouter.getPathToNote(this.id, this.notebookId);
  }

  get linkHTML() {
    return `<a href="${this.pathToNote}" title="${this.title}">${this.title}</a>`;
  }

  render() {
    return `<li>${this.linkHTML}</li>`;
  }
}
