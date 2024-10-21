import { app } from 'electron';

import mainBrowser from '@electron/browser/main';
import initApplication from '@electron/shared/application';


async function appReadyHandle() {
  try {
    void initApplication()
    console.log('userData',app.getPath('userData'));
    mainBrowser.init();
  } catch (e) {
    console.log(e);
  }
}
app.on('ready', () => {
  void appReadyHandle();
});