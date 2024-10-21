import { app } from 'electron';
import fs from 'node:fs';
import path from 'node:path';

export function getDataPath(_path: string) {
  return path.resolve(app.getPath('sessionData'), ..._path.split('/'));
}

/**
 * 创建文件夹
 * @param filePath
 */
export function createDir(filePath: string) {
  const dirs = filePath.split('/').filter(Boolean);
  dirs.forEach((_dir, index) => {
    const path = dirs.slice(0, index + 1).join('/');
    console.log(!fs.existsSync(path));
    if (!fs.existsSync(path)) {
      console.log('================',path);
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
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(target);
  readStream.pipe(writeStream);
}

/**
 * 获取排除文件后缀的文件名称
 * @param filePath
 */
export function getFileName(filePath: string) {
  return filePath.split('.').slice(0, -1).join('.');
}
