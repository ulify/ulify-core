import { FC } from 'react';
import { cn } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar.tsx';
import { isMacOS } from '@/utils/device.ts';
import { ActionModeType, useGlobal } from '@/stores/global.ts';
import { useShallow } from 'zustand/react/shallow';
import { useTheme } from '@/provider/theme-provider.tsx';

type IConfigType = {
  key: ActionModeType;
  label: string;
  icon: string;
};

const baseBtnConfig: IConfigType[] = [
  {
    key: 'search',
    label: '搜索',
    icon: 'icon-[icon-park-outline--search]'
  },
  {
    key: 'ai',
    label: 'AI',
    icon: 'icon-[hugeicons--ai-brain-03]'
  }
];

export interface SiderBarProps extends React.HTMLAttributes<HTMLDivElement> {}
export const SiderBar: FC<SiderBarProps> = ({ className }) => {
  const { mode, setMode } = useGlobal(
    useShallow((state) => ({
      mode: state.actionMode,
      setMode: state.updateActionMode
    }))
  );
  const {setTheme} = useTheme();

  return (
    <div
      className={cn(
        'flex flex-col w-16 h-full flex-shrink-0 transition-all drag',
        isMacOS() && 'pt-5',
        className
      )}
    >
      <div className='w-full py-4 flex flex-col items-center justify-center'>
        <Avatar className='w-8 h-8'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-col justify-center items-center px-2 gap-2 py-2 no-drag'>
        <TooltipProvider delayDuration={200}>
          {baseBtnConfig.map((item) => (
            <Tooltip key={item.key}>
              <TooltipTrigger asChild>
                <Button
                  variant={mode === item.key ? 'default' : 'ghost'}
                  size='icon'
                  onClick={() => setMode(item.key)}
                >
                  <span className={cn('w-5 h-5', item.icon)} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' align='center'>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <div className='no-drag'>

        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={() => setTheme('dark')}>dark</button>
      </div>
    </div>
  );
};
