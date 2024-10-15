import { ThemeProvider } from '@/provider/theme-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes.tsx';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
