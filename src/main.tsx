import ReactDOM from 'react-dom/client';
import App from '@/app';

import '@/design/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});
