import { cn } from '@/lib/utils.ts';
import { useRef, useState } from 'react';

export const SearchBar = () => {
  const [focus, setFocus] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={cn('w-full h-16 drag')}>
      <div className='h-full w-full flex flex-row justify-center items-center border-b border-b-accent/60'>
        <div className='flex flex-row justify-start items-center bg-muted text-muted-foreground rounded-sm pl-4 pr-2 py-2 gap-2 ml-4 flex-shrink-0'>
          <span className='icon-[solar--library-outline] w-5 h-5'></span>
          <span className='text-sm font-extrabold'>插件市场</span>
          <div className='no-drag hover:bg-primary-foreground/20 w-6 h-6 flex flex-row justify-center items-center rounded-full cursor-pointer'>
            <span className='icon-[material-symbols--close]' />
          </div>
        </div>
        <input
          ref={inputRef}
          className='outline-none bg-transparent flex-1 h-full text-2xl font-thin px-4'
          placeholder='Hi Ulify'
          autoFocus={true}
          type='text'
          onFocus={()=>setFocus(true)}
        />
        <div className='h-full flex flex-row justify-center items-center px-3'>
          <kbd className='bg-muted/60 text-muted-foreground font-light text-xs px-3 py-1 rounded'>
            Esc
          </kbd>
        </div>
      </div>
    </div>
  );
};
