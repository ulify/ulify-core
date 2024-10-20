import { app } from 'electron';

export function getDataPath(path: string) {
  return app.isPackaged ? app.getPath('userData') : '';
}
