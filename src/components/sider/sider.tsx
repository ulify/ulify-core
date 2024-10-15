import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Theme, useTheme } from '@/provider/theme-provider.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.tsx';
import { cn } from '@/lib/utils.ts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';

type IConfigItem = {
  key: string;
  label: string;
  icon: string;
  path: string;
};

const configs: IConfigItem[] = [
  {
    key: 'search',
    label: '智能搜索',
    icon: 'icon-[mynaui--search-waves]',
    path: '/search'
  },
  {
    key: 'ai',
    label: 'AI会话',
    icon: 'icon-[hugeicons--ai-chat-02]',
    path: '/ai'
  },
  {
    key: 'extensions',
    label: '插件市场',
    icon: 'icon-[solar--widget-add-broken]',
    path: '/extensions'
  }
];

const NavbarItem: FC<{
  source: IConfigItem;
  primary: boolean;
  onClick: () => void;
}> = ({ source, primary, onClick }) => {
  if (primary) {
    return (
      <Button size='icon' onClick={onClick}>
        <span className={cn('w-5 h-5', source.icon)} />
      </Button>
    );
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={primary ? 'default' : 'ghost'}
          size='icon'
          onClick={onClick}
        >
          <span className={cn('w-5 h-5', source.icon)} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side='right' align='center'>
        <p>{source.label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-5 no-drag'>
      <TooltipProvider delayDuration={100}>
        {configs.map((item) => (
          <NavbarItem
            key={item.key}
            source={item}
            primary={location.pathname === item.path}
            onClick={() => {
              if (location.pathname !== item.path) {
                navigate(item.path);
              }
            }}
          />
        ))}
      </TooltipProvider>
    </div>
  );
};

const Setting = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost' className='no-drag'>
          <span className='icon-[lets-icons--setting-alt-line] w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 border-accent/20'
        side='right'
        align='end'
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            基础设置
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            文件启动
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            全局能力
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            指令管理
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>语言</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className='flex gap-2'>
              <span className='icon-[fluent--dark-theme-20-filled]' />
              主题设置
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={theme}
                  onValueChange={(val) => {
                    setTheme(val as Theme);
                  }}
                >
                  <DropdownMenuRadioItem value='system' className='flex gap-2'>
                    <span className='icon-[material-symbols--desktop-windows-outline] w-4 h-4' />
                    跟随系统
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='light' className='flex gap-2'>
                    <span className='icon-[material-symbols--light-mode] w-4 h-4' />
                    浅色
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='dark' className='flex gap-2'>
                    <span className='icon-[material-symbols--dark-mode-rounded] w-4 h-4' />
                    深色
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Sider = () => {
  return (
    <div className='w-16 h-full bg-muted/80 flex flex-col justify-between items-center pb-2 drag'>
      <div className='font-extrabold text-xs py-2'>ULIFY</div>
      <Navbar />
      <div className='flex-1 w-full flex flex-col justify-start items-center gap-2'>
        <div className='w-full flex justify-center items-center gap-1.5'>
          <span className='inline-block w-2 h-2 bg-green-600 rounded-full'></span>
          <div className='text-[10px] text-center text-primary'>运行中</div>
        </div>
      </div>
      <Setting />
    </div>
  );
};
