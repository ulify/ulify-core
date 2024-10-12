import { Button } from '@/components/ui/button.tsx';
import { Show } from '@/components/common/show.tsx';

export const Ai = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Button variant='outline'>Ai</Button>
        <Show when={true} keyed={false}>
          <Button variant='outline'>Ai</Button>
        </Show>
      </div>
    </div>
  );
};
