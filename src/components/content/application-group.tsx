import { FC } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar.tsx';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu.tsx';

interface ItemType {
  title: string;
  icon: string;
}

interface ApplicationGroupItemProps {
  source: ItemType;
}

const ApplicationGroupItem: FC<ApplicationGroupItemProps> = ({ source }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className='w-20 flex flex-col justify-center items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted'>
          <Avatar className='w-10 h-10 rounded'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className='text-primary text-center text-xs line-clamp-2'>
            {source.title}
          </span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-48'>
        <ContextMenuItem className='flex gap-1.5'>
          <span className='icon-[hugeicons--delete-03] w-4 h-4' />
          从“使用记录中”删除
        </ContextMenuItem>
        <ContextMenuItem className='flex gap-1.5'>
          <span className='icon-[mdi-light--pin] w-4 h-4' />
          固定到搜索面板
        </ContextMenuItem>
        <ContextMenuItem className='flex gap-1.5'>
          <span className='icon-[mdi-light--pin] w-4 h-4' />
          固定到超级面板
        </ContextMenuItem>
        <ContextMenuItem className='flex gap-1.5'>
          <span className='icon-[ph--info] w-4 h-4' />
          关于插件应用
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export interface ApplicationGroupProps {
  title: string;
  list: Array<ItemType>;
}

export const ApplicationGroup: FC<ApplicationGroupProps> = ({
  title,
  list
}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center py-2 px-4'>
        <div className='font-medium text-sm'>{title}</div>
      </div>
      <div className='flex flex-row justify-start items-center flex-wrap px-4'>
        {list.map((item) => (
          <ApplicationGroupItem source={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};
