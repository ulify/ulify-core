import { BaseWindow, WebContentsView } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  WINDOW_HEIGHT,
  WINDOW_PLUGIN_HEIGHT,
  WINDOW_WIDTH
} from '@electron/config/constants';
import { VITE_DEV_SERVER_URL, RENDERER_DIST } from '@electron/config/common';
import { getPosition } from '@electron/utils/position';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class MainBrowser {
  private x: number;
  private y: number;

  private main: BaseWindow;
  private search: WebContentsView;

  private pluginView?: WebContentsView;

  public init() {
    this.createMainWindow();
  }

  /**
   * 显示窗口
   */
  public show() {
    this.main.show();
    this.search.webContents.focus();
  }

  /**
   * 隐藏窗口
   */
  public hide() {
    this.main.hide();
  }
  /**
   * 更新主窗口高度自定义高度
   * @param height
   */
  public setExpendHeight(height: number) {
    this.search.webContents.setZoomFactor(1);
    this.main.setPosition(this.x, this.y);
    this.main.setSize(WINDOW_WIDTH, WINDOW_HEIGHT + height);
  }

  /**
   * 设置主窗口为插件大小
   * @private
   */
  public setWindowPluginHeight() {
    this.setExpendHeight(WINDOW_PLUGIN_HEIGHT);
  }

  /**
   * 创建主窗口
   * @private
   */
  private createMainWindow() {
    const { x, y } = getPosition();
    this.x = x;
    this.y = y;
    this.main = new BaseWindow({
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      x,
      y,
      useContentSize: true,
      resizable: true,
      fullscreenable: false,
      frame: false,
      title: 'Ulify',
      show: true,
      transparent: false,
      skipTaskbar: true,
      focusable: true,
      alwaysOnTop: true,
      backgroundColor: '#fff'
    });
    this.search = new WebContentsView({
      webPreferences: {
        nodeIntegrationInWorker: true,
        nodeIntegration: true,
        contextIsolation: false,
        zoomFactor: 1.0,
        preload: path.join(__dirname, '../preload/index.js')
      }
    });
    this.main.contentView.addChildView(this.search);

    this.search.setBounds({
      x: 0,
      y: 0,
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT + WINDOW_PLUGIN_HEIGHT
    });

    if (VITE_DEV_SERVER_URL) {
      void this.search.webContents.loadURL(VITE_DEV_SERVER_URL);
      this.search.webContents.openDevTools();
    } else {
      void this.search.webContents.loadFile(
        path.join(RENDERER_DIST, 'index.html')
      );
    }
    this.handler();
  }

  handler() {
    this.main.on('moved', () => {
      const [x, y] = this.main.getPosition();
      this.x = x;
      this.y = y;
    });
  }
}

const mainBrowser = new MainBrowser();

export default mainBrowser;
