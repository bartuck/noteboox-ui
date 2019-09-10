import { NoteComponent } from "./note.component";
import { APP_EVENTS } from "../core/const/app-events.const";

export class NotesComponent {
  constructor(eventManager, params, query) {
    this.eventManager = eventManager;
    this.params = params;
    this.query = query;
    this.noteComponent = new NoteComponent();
    console.log('Hello NotesComponent');
    console.log('NotesComponent', params, query);

    this.initHTMLElements();
    this.addEvents();
  }

  initHTMLElements() {

  }

  addEvents() {
    this.eventManager.addEvent(APP_EVENTS.SHOW_NOTES, () => this.show());
  }

  show() {

  }
}
