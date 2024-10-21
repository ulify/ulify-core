import { createDir, getDataPath } from '@electron/utils/file';
import { isMac, isWindows } from '@electron/utils/device';
import { MacosApplication } from './mac';
import { WindowsApplication } from './windows';
import { PUBLIC_PATH } from '@electron/config/constants.ts';

export default async function initApplication() {
  createDir(getDataPath(PUBLIC_PATH + '/images'));

  console.log(isWindows());
  //
  let application;
  if (isWindows()) {
    const window = new WindowsApplication();
    application = await window.init();
  } else if (isMac()) {
    const macos = new MacosApplication();
    application = await macos.init();
  }

  console.log(application);
}
