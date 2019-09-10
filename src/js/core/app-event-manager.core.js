export class AppEventManager {
  constructor() {
    this.eventsStorage = {};
  }

  addEvent(id, callback) {
    if (typeof callback !== 'function') {
      throw new Error('[AppEventManager] addEvent: event callback has to be a function');
    }

    if (this.eventsStorage.hasOwnProperty(name)) {
      return this.eventsStorage[id].push(callback);
    }

    this.eventsStorage[id] = [callback];
  }

  dispatchEvent(id, ...args) {
    if (!this.eventsStorage.hasOwnProperty(id)) {
      return console.warn('[AppEventManager] dispatchEvent: the requested event does not exist in the event storage', id);
    }

    const callbacks = this.eventsStorage[id];

    if (!this.isIterable(callbacks)) {
      return console.warn('[AppEventManager] dispatchEvent: no iterable callbacks', id);
    }

    for (const fn of callbacks) {
      fn(args);
    }
  }

  isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }

    return typeof obj[Symbol.iterator] === 'function';
  }
}
