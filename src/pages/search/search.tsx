import { SearchBar } from '@/pages/search/search-bar.tsx';
import { ButtonGroup,Button } from '@material-tailwind/react';



export const Search = () => {
  return (
    <div className='w-full h-full'>
      <div className='max-w-3xl mx-auto h-full px-6 flex flex-col'>
        <div className='w-full h-full flex-1'>
          <div className='flex flex-col justify-center items-center'>
            <div>
              <p>你好，用户GigSTL</p>
              <p>你的超级助手已上线！</p>
              <ButtonGroup>
                <Button color='amber'>123</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};