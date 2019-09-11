import { APP_ROUTER } from "../../core/const/app-router.const";
import { APP_EVENTS } from "../../core/const/app-events.const";

export class NoteContentComponent {
  constructor(eventManager, params, query) {
    this.eventManager = eventManager;
    this.params = params;

    this.initHTMLElements();
    this.addEvents();
  }

  get noteId() {
    return this.params[APP_ROUTER.NOTE.PARAMS.ID];
  }

  initHTMLElements() {
    this.noteHTML = document.getElementById('note-content');
  }

  addEvents() {
    this.eventManager.addEvent(APP_EVENTS.SHOW_NOTE, () => this.show());
  }

  show() {
    console.log('NoteContentComponent');
    this.noteHTML.innerHTML = this.createContentHTML();
  }

  createContentHTML() {
    const contentMock = {
      title: 'Mock Title',
      content: 'Mock Note Contents'
    };
    let contentHTML = `<h3>${contentMock.title}</h3>`

    contentHTML += `<p>${contentMock.content}</p>`;

    return contentHTML;
  }
}
