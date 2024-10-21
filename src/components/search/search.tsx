import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar.tsx';
import { Badge } from '@/components/ui/badge.tsx';

export const Search = () => {
  return (
    <div className='h-16 flex justify-between items-center gap-3 px-3 drag'>
      <div className='relative cursor-pointer'>
        <Avatar className='rounded'>
          <AvatarImage
            src='https://avatars.githubusercontent.com/u/34928425?s=48&v=4'
            alt='@shadcn'
          />
          <AvatarFallback>
            <span className='icon-[token-branded--nav]' />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className='flex-1 h-full'>
        <input
          placeholder='Hi Ulify'
          className='outline-none h-full w-full bg-transparent font-light text-[18px]'
        />
      </div>
      <Badge className='font-light' variant='secondary'>
        Esc
      </Badge>
    </div>
  );
};
