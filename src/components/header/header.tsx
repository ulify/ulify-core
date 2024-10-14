import { QuickBar } from '@/components/header/quick-bar.tsx';
import { SearchBar } from '@/components/header/search-bar.tsx';

export const Header = () => {
  return (
    <div className='flex flex-col'>
      <SearchBar />
      {/*<QuickBar />*/}
    </div>
  );
};
