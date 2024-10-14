import { Badge } from '@/components/ui/badge.tsx';

export const QuickBar = () => {
  return (
    <div className='w-full py-1.5'>
      <div className='flex flex-row justify-start items-center pl-4 gap-1.5'>
        <Badge className='gap-2 py-1 cursor-pointer' variant='secondary'>
          <span className='icon-[solar--library-outline] w-4 h-4'></span>
          插件市场
        </Badge>
        <Badge className='gap-2 py-1 cursor-pointer' variant='secondary'>
          <span className='icon-[hugeicons--ai-search] w-4 h-4'></span>AI 搜索
        </Badge>
      </div>
    </div>
  );
};
