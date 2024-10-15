import { Button } from '@/components/ui/button.tsx';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import { Theme, useTheme } from '@/provider/theme-provider.tsx';

const UserProfileBtn = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='ghost'>
            <span className='icon-[solar--user-outline] w-4 h-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent side='top' align='start'>
          <p>账户信息</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SettingBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <span className='icon-[lets-icons--setting-alt-line] w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 border-accent/20' side='right' align='end'>
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
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const FooterBar = () => {
  return (
    <div className='flex flex-row justify-start items-center gap-0.5 pl-2'>
      <UserProfileBtn />
      <SettingBtn />
    </div>
  );
};
