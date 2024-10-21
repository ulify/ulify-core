import { nativeImage } from 'electron';
import { readdirSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { getDataPath } from '@electron/utils/file';
import { PUBLIC_PATH } from '@electron/config/constants';

export class MacosApplication {
  async init() {
    console.log('init');
    return await this.getApps();
  }

  private profilerShell() {
    return new Promise<string>((resolve) => {
      const systemProfiler = spawn('system_profiler', [
        'SPApplicationsDataType'
      ]);
      let chunks = '';
      systemProfiler.stdout.on('data', (chunk) => {
        chunks += chunk;
      });
      systemProfiler.on('close', () => {
        resolve(chunks);
      });
    });
  }

  getSystemPanes() {
    const path = '/System/Library/PreferencePanes';
    return readdirSync(path).map((file) => {
      return {
        name: file.split('.')[0],
        main: path + '/' + file,
        logo: ''
      };
    });
  }

  formatStringToArrayObj(str: string) {
    const lines = str.split('\n').filter((line) => line.trim() !== '');
    const list: Recordable[] = [];
    let item: Recordable = {};
    lines.forEach((line, index) => {
      const lineArr = line.split(':');
      if (lineArr.length === 2) {
        const lineValue = lineArr[1].trim();
        if (lineValue !== '') {
          item[lineArr[0].trim()] = lineValue;
        } else {
          if (index !== 0) {
            list.push(item);
            item = {};
          }
          item['name'] = (lineArr[0] || '').trim();
        }
      }
    });
    return list
      .filter((item) => item.name && item.Location)
      .map((item) => ({
        name: item.name,
        logo: '',
        main: item.Location
      }));
  }

  async getApplicationDetail(item: IPlugin) {
    try {
      if(!item.main) return null;
      const image = await nativeImage.createThumbnailFromPath(item.main, {
        width: 48,
        height: 48
      });
      /**
       * 没有读取到icon文件
       */
      if (image.isEmpty()) {
        return null;
      }
      const dataBuffer = image.toPNG();
      const iconPath = getDataPath(
        PUBLIC_PATH + '/images/' + item.name + '.png'
      );
      writeFileSync(iconPath, dataBuffer);
      return { ...item, logo: iconPath };
    } catch (error) {
      console.log(error);
    }
    return item;
  }

  async getApps() {
    return new Promise<IPlugin[]>(async (resolve) => {
      const appData = await this.profilerShell();

      const appList = this.formatStringToArrayObj(appData);
      const panesList = this.getSystemPanes();

      const appPromises = appList.map(this.getApplicationDetail);
      const panesPromises = panesList.map(this.getApplicationDetail);
      Promise.all([...appPromises, ...panesPromises]).then((data) => {
        resolve(data.filter(Boolean));
      });
    });
  }
}
