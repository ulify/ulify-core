export const WindowBar = () => {
  return (
    <div className='h-8 w-full bg-background/70 backdrop-blur-md flex flex-row justify-end items-center drag'>
      <div className='flex flex-row justify-start items-center cursor-pointer no-drag'>
        <div className='w-8 h-8 flex flex-row justify-center items-center text-foreground transition-all hover:bg-muted hover:text-muted-foreground'>
          <span className='icon-[mdi--minus]' />
        </div>
        <div className='w-8 h-8 flex flex-row justify-center items-center text-foreground transition-all hover:bg-muted hover:text-muted-foreground'>
          <span className='icon-[grommet-icons--checkbox] w-3 h-3'></span>
        </div>
        <div className='w-8 h-8 flex flex-row justify-center items-center text-foreground transition-all hover:bg-red-600 hover:text-white'>
          <span className='icon-[mdi--close]' />
        </div>
      </div>
    </div>
  );
};
