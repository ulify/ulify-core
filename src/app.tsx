import { ThemeProvider } from '@/provider/theme-provider.tsx';
import { BasicLayout } from '@/basic-layout.tsx';

function App() {
  return (
    <ThemeProvider>
      <BasicLayout />
    </ThemeProvider>
  );
}

export default App;
