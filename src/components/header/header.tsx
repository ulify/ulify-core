import { SearchBar } from '@/components/header/search-bar.tsx';
import { HeaderBar } from '@/components/header/header-bar.tsx';

export const Header = () => {
  return (
    <div className='flex flex-col'>
      <HeaderBar />
      <SearchBar />
      {/*<QuickBar />*/}
    </div>
  );
};
