export class AppEventManager {
  constructor() {
    this.eventsStorage = {};
  }

  addEvent(id, callback) {
    if (callback !== 'function') {
      throw new Error('[AppEventManager] addEvent: event callback has to be a function');
    }

    if (this.eventsStorage.hasOwnProperty(name)) {
      return this.eventsStorage[id].push(callback);
    }

    this.eventsStorage[id] = [callback];
  }

  dispatchEvent(id, ...args) {
    if (!this.eventsStorage.hasOwnProperty(id)) {
      throw new Error('[AppEventManager] dispatchEvent: the requested event does not exist in the event storage')
    }

    const callbacks = this.eventsStorage[id];

    for (const fn of callbacks) {
      fn(args);
    }
  }
}
