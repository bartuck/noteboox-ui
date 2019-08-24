import Navigo from '../../../node_modules/navigo/lib/navigo.es';


export class AppRouter {
  constructor() {
    const root = null;
    const useHash = true;

    this.router = new Navigo(root, useHash);
  }
}
