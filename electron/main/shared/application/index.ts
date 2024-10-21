import { isWindows, isMac } from '@electron/utils/device';
import { createDir, getDataPath } from '@electron/utils/file';
import { MacosApplication } from './mac';

export default async function initApplication() {
  console.log('_________',getDataPath('/resources/images'));
  createDir(getDataPath('/resources/images'));
  //
  // let application: IPlugin[];
  // if (isWindows()) {
  //   // const window = new WindowsApplication();
  //   // application = await window.init();
  // } else if (isMac()) {
  //   const macos = new MacosApplication();
  //   application = await macos.init();
  // }
  //
  // console.log(application);

}
