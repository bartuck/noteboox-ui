export class AppInstallPrompt {
  constructor() {
    this.deferredPrompt = null;
    this.onBeforeInstallPrompt();
    this.onAppInstalled();
  }

  onBeforeInstallPrompt() {
    window.addEventListener('beforeinstallprompt', event => {
      console.log('[AppInstallPrompt] beforeinstallprompt');

      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();

      // Stash the event so it can be triggered later.
      this.deferredPrompt = event;

      // Attach the install prompt to a user gesture
      document.querySelector('#installBtn').addEventListener('click', event => {

        // Show the prompt
        this.deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            this.deferredPrompt = null;
          });
      });

      // Update UI notify the user they can add to home screen
      document.querySelector('#installBanner').style.display = 'flex';
    });
  }

  onAppInstalled() {
    window.addEventListener('appinstalled', e => {
      console.log('a2hs installed', e);
      document.querySelector('#installBanner').style.display = 'none';
    });
  }
}
