import { Button } from '@/components/ui/button.tsx';
import { SearchBar } from '@/pages/search/search-bar.tsx';


export const Search = () => {
  return (
    <div className='w-full h-full'>
      <div className='px-4 py-4 flex flex-col justify-center items-center'>
        <SearchBar />
      </div>
      <div className='px-4'>
        <div className='flex gap-2'>
          <Button variant='outline'>Search By...</Button>
        </div>
      </div>
    </div>
  );
};