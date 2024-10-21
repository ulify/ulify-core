// import {
//   app,
//   BrowserWindow,
//   BaseWindow,
//   WebContentsView
// } from 'electron';
// import { fileURLToPath } from 'node:url';
// import path from 'node:path';
// import { getDataPath } from './main/utils/file';
//
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
//
// console.log('===',__dirname);
//
// // The built directory structure
// //
// // ├─┬─┬ dist
// // │ │ └── index.html
// // │ │
// // │ ├─┬ dist-electron
// // │ │ ├── main.js
// // │ │ └── preload.mjs
// // │
// process.env.APP_ROOT = path.join(__dirname, '..');
//
// // 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
// export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
// export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron');
// export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');
//
// console.table(VITE_DEV_SERVER_URL)
// console.log(MAIN_DIST)
// console.log(RENDERER_DIST)
//
// console.log('...',VITE_DEV_SERVER_URL
//   ? path.join(process.env.APP_ROOT, 'public')
//   : RENDERER_DIST);
//
// console.log(getDataPath('icon'));
//
//
// process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
//   ? path.join(process.env.APP_ROOT, 'public')
//   : RENDERER_DIST;
//
//   console.log(process.env.VITE_PUBLIC)
//
// let win: BrowserWindow | null;
//
// function createWindow() {
//   const baseWin = new BaseWindow({
//     width: 832,
//     height: 680,
//     frame: false
//   });
//
//   const mainView = new WebContentsView({
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.mjs')
//     }
//   });
//   if (VITE_DEV_SERVER_URL) {
//     mainView.webContents.loadURL(VITE_DEV_SERVER_URL);
//   } else {
//     // win.loadFile('dist/index.html')
//     mainView.webContents.loadFile(path.join(RENDERER_DIST, 'index.html'));
//   }
//   baseWin.contentView.addChildView(mainView);
//   mainView.setBounds({
//     x: 0,
//     y: 0,
//     width: 832,
//     height: 680
//   });
//
//   mainView.webContents.openDevTools();
// }
//
// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//     win = null;
//   }
// });
//
// app.on('activate', () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
//
// app.whenReady().then(createWindow);
