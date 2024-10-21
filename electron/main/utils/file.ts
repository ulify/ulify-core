import { app } from 'electron';
import fs from 'node:fs';
import path from 'node:path';
import { RENDERER_DIST } from '@electron/config/common.ts';

export function getDataPath(_path: string) {
  return path.join(path.resolve(
    app.isPackaged ? app.getPath('userData') : RENDERER_DIST,
    ..._path.split('/'))
  );
}

/**
 * 创建文件夹
 * @param filePath
 */
export function createDir(filePath: string) {
  const dirs = filePath.split(path.sep).filter(Boolean);
  dirs.forEach((_dir, index) => {
    const path = dirs.slice(0, index + 1).join('/');
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  });
}

/**
 * 复制文件
 * @param source 源路径
 * @param target 目标路径
 */
export function copyFile(source: string, target: string) {
  try {
    const data = fs.readFileSync(source);
    fs.writeFileSync(target, data);
  }catch (error){
    console.log(error);
  }
}

/**
 * 获取排除文件后缀的文件名称
 * @param filePath
 */
export function getFileName(filePath: string) {
  return path.basename(filePath).replace(/\.[^.]+$/, '');
}
