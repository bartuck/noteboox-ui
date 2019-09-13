import { APP_ROUTER } from "../../core/const/app-router.const";
import { APP_EVENTS } from "../../core/const/app-events.const";
import { AppRouter } from "../../core/app-router.core";

export class NoteContentComponent {
  constructor(eventManager, params) {
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
    this.noteHTML.innerHTML = this.createContentHTML();

    this.appendCloseBtnHTML();
  }

  close() {
    this.noteHTML.innerHTML = '';

    this.redirectToNotesList();
  }

  createContentHTML() {
    const contentMock = {
      title: 'Mock Title',
      content: 'Mock Note Contents'
    };
    let contentHTML = `<h3>${contentMock.title}</h3>`;

    contentHTML += `<p>${contentMock.content}</p>`;

    return contentHTML;
  }

  createCloseBtnHTML() {
    const btnHTML = document.createElement('button');

    btnHTML.type = 'button';
    btnHTML.innerHTML = '&cross;';
    btnHTML.addEventListener('click', () => this.close());

    return btnHTML;
  }

  appendCloseBtnHTML() {
    const btnHTML = this.createCloseBtnHTML();

    this.noteHTML.appendChild(btnHTML);
  }

  redirectToNotesList() {
    console.log(this.params);
    const noteId = this.params[APP_ROUTER.NOTE.PARAMS.ID];
    const notebookId = this.params[APP_ROUTER.NOTEBOOK.PARAMS.ID];
    const pathCurrNoteNotes = AppRouter.getPathToNote(noteId, notebookId);

    console.log('pathCurrNoteNotes', pathCurrNoteNotes);
  }
}
