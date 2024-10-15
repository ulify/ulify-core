import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import { Button } from '@/components/ui/button.tsx';

export const NavbarItem = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='ghost' size='icon'>
          <span className='icon-[material-symbols--manage-search] w-6 h-6' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
      <span>Action</span>
      <TooltipProvider delayDuration={100}>
        <div className='h-7 flex justify-center items-center gap-1 text-xs px-2.5 rounded-lg cursor-pointer hover:bg-background hover:text-ring'>
          <span className='icon-[material-symbols--manage-search] w-5 h-5' />
        </div>
        <NavbarItem />
        <div className='h-7 flex justify-center items-center gap-1 text-xs px-2.5 rounded-lg cursor-pointer hover:bg-background hover:text-ring'>
          <span className='icon-[hugeicons--ai-chat-02] w-4 h-4' />
        </div>
        <div className='h-7 flex justify-center items-center gap-1 text-xs px-2.5 rounded-lg cursor-pointer hover:bg-background hover:text-ring'>
          <span className='icon-[solar--library-outline] w-4 h-4' />
        </div>
      </TooltipProvider>
    </div>
  );
};

export const HeaderBar = () => {
  return (
    <div className='w-full h-10 bg-muted flex justify-between items-center'>
      <div className='font-extrabold text-xs pl-2'>ULIFY</div>
      <Navbar />
      <div>1</div>
    </div>
  );
};
