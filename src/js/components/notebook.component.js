import { APP_ROUTER } from "../core/const/app-router.const";

export class NotebookComponent {
  constructor(eventManager, notebook) {
    this.eventManager = eventManager;
    this.title = notebook.title;
    this.id = notebook.id;
  }

  get pathToNotebook() {
    return '#' + APP_ROUTER.NOTEBOOKS.PATH + '/' + this.id;
  }

  get linkHTML() {
    return `<a href="${this.pathToNotebook}" title="${this.title}">${this.title}</a>`;
  }

  render() {
    return `<li>${this.linkHTML}</li>`;
  }
}
