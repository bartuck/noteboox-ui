import { APP_ROUTER } from "../core/const/app-router.const";
import { AppRouter } from "../core/app-router.core";

export class NotebookComponent {
  constructor(eventManager, notebookData) {
    this.eventManager = eventManager;
    this.title = notebookData.title;
    this.id = notebookData.id;
  }

  get pathToNotebook() {
    return AppRouter.getPathToNotebook(this.id);
  }

  get linkHTML() {
    return `<a href="${this.pathToNotebook}" title="${this.title}">${this.title}</a>`;
  }

  render() {
    return `<li>${this.linkHTML}</li>`;
  }
}
