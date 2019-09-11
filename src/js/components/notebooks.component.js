import { NotebookComponent } from "./notebook.component";
import { APP_EVENTS } from "../core/const/app-events.const";

export class NotebooksComponent {
  constructor(eventManager) {
    console.log('Hello NotebooksComponent');
    this.eventManager = eventManager;

    this.initHTMLElements();
    this.addEvents();
  }

  initHTMLElements() {
    this.listHTML = document.getElementById('notebooks-list');
  }

  addEvents() {
    this.eventManager.addEvent(APP_EVENTS.SHOW_NOTEBOOKS, () => this.show());
  }

  show() {
    const notebooks = this.buildList();

    this.listHTML.innerHTML = notebooks;
  }

  buildList() {
    const mockData = [
      { title: 'Notes 1', id: 123 },
      { title: 'Notes 2', id: 234 },
      { title: 'Notes 666', id: 345 }
    ];
    let notebooks = '';

    for (const notebook of mockData) {
      notebooks += this.createNotebook(notebook);
    }

    return notebooks;
  }

  createNotebook(notebookData) {
    return new NotebookComponent(this.eventManager, notebookData).render();
  }
}
