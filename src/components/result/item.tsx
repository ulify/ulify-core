import React, { FC } from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu';

export interface ItemProps {
  data: ExtensionsType;
}

interface ItemContextMenuProps {
  children: React.ReactNode;
}

const ItemContextMenu: FC<ItemContextMenuProps> = ({ children }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className='w-48 bg-background/95 backdrop-filter'>
        <ContextMenuItem className='gap-2 cursor-pointer border-accent/50 hover:bg-primary hover:text-primary-foreground'>
          <span className='icon-[si--remove-circle-line] w-4 h-4' />
          <span>从使用记录中移除</span>
        </ContextMenuItem>
        <ContextMenuItem className='gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground'>
          <span className='icon-[proicons--pin]' />
          <span>固定到搜索面板</span>
        </ContextMenuItem>
        <ContextMenuItem className='gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground'>
          <span className='icon-[proicons--pin]' />
          <span>固定到超级面板</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const VerticalItem: FC<ItemProps> = ({ data }) => {
  return (
    <ItemContextMenu>
      <div className='flex flex-col justify-center items-center w-20 h-20 rounded-md gap-2 cursor-pointer transition-all hover:bg-muted'>
        <div className='w-8 h-8 bg-primary/10 rounded'></div>
        <span className='text-sm font-medium'>{data.title}</span>
      </div>
    </ItemContextMenu>
  );
};

export const HorizontalItem: FC<ItemProps> = ({ data }) => {
  return (
    <ItemContextMenu>
      <div className='flex flex-row justify-start items-center w-full px-2.5 py-2 rounded-md gap-2 cursor-pointer transition-all hover:bg-muted'>
        <div className='w-8 h-8 bg-primary/10 rounded'></div>
        <span className='text-sm font-medium'>{data.title}</span>
        <span className='text-xs text-muted-foreground/50 ml-auto'>
          {data.description}
        </span>
      </div>
    </ItemContextMenu>
  );
};
