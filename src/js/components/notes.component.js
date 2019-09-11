import { NoteComponent } from "./note.component";
import { APP_EVENTS } from "../core/const/app-events.const";
import { APP_ROUTER } from "../core/const/app-router.const";

export class NotesComponent {
  constructor(eventManager, params, query) {
    this.eventManager = eventManager;
    this.params = params;

    this.initHTMLElements();
    this.addEvents();
  }

  get notebookId() {
    return this.params[APP_ROUTER.NOTEBOOK.PARAMS.ID];
  }

  initHTMLElements() {
    this.listHTML = document.getElementById('notes-list');
  }

  addEvents() {
    this.eventManager.addEvent(APP_EVENTS.SHOW_NOTES, () => this.show());
  }

  show() {
    this.listHTML.innerHTML = this.buildList();
  }

  buildList() {
    const mockData = [
      { title: 'Note 12', id: 44 },
      { title: 'Notes 13', id: 55 },
      { title: 'Notes 14', id: 77 }
    ];
    let notes = '';

    for (const note of mockData) {
      notes += this.createNote(note);
    }

    return notes;
  }

  createNote(noteData) {
    return new NoteComponent(this.eventManager, noteData, this.notebookId).render();
  }
}
