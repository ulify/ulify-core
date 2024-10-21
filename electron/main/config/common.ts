import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const APP_ROOT = path.join(__dirname, '..');

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

export const MAIN_DIST = path.join(APP_ROOT, 'dist-electron');

export const DEV_RENDERER = path.join(APP_ROOT, 'public');

export const PROD_RENDERER = path.join(APP_ROOT, 'dist');

export const RENDERER_DIST = VITE_DEV_SERVER_URL ? DEV_RENDERER : PROD_RENDERER;



