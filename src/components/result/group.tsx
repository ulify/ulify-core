import { FC } from 'react';
import { HorizontalItem, VerticalItem } from './item';

export interface GroupProps {
  title: string;
  type?: 'vertical' | 'horizontal';
  max?: number;
  list: Array<ExtensionsType>;
}
export const Group: FC<GroupProps> = ({
  title,
  type = 'vertical',
  max = 10,
  list
}) => {
  const Item = type === 'vertical' ? VerticalItem : HorizontalItem;
  return (
    <div className='pb-4'>
      <div className='text-xs text-muted-foreground font-medium pl-2 py-2'>
        {title}
      </div>
      <div className='flex flex-wrap justify-start items-center px-2'>
        {list.map((item, index) => (
          <Item key={index} data={item} />
        ))}
        {list.length > max && <span className='text-xs text-muted-foreground'>...</span>}
      </div>
    </div>
  );
};
