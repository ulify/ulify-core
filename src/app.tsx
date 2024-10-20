import { ThemeProvider } from '@/theme-provider.tsx';
import { Result } from '@/components/result/result.tsx';
import { Search } from '@/components/search/search.tsx';

function Content() {
  return (
    <>
      <Search />
      <Result />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
