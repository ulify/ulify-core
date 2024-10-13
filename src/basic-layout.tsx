import { SiderBar } from '@/components/sider-bar/sider-bar.tsx';
import { useShallow } from 'zustand/react/shallow';
import { Search } from '@/pages/search/search.tsx';
import { Ai } from '@/pages/ai/ai.tsx';
import { isWindows } from '@/utils/device.ts';
import { Show } from '@/components/common/show.tsx';
import { WindowBar } from '@/components/window-bar/window-bar.tsx';
import { useGlobal } from '@/stores/global.ts';

import Bg from '@/assets/container-bg.webp'

export const BasicLayout = () => {
  const { mode } = useGlobal(
    useShallow((state) => ({
      mode: state.actionMode
    }))
  );

  return (
    <div className='w-full h-full relative'>
      <img className='w-full h-full' src={Bg} alt="bg" />
      <div className='absolute left-0 right-0 top-0 bottom-0 flex flex-row bg-background/90 backdrop-blur-md'>
        <SiderBar />
        <div className='flex-1 overflow-hidden h-full flex flex-col'>
          <Show when={isWindows()}>
            <WindowBar />
          </Show>
          <div className='flex-1 overflow-hidden'>
            <Show when={mode === 'search'}>
              <Search />
            </Show>
            <Show when={mode === 'ai'}>
              <Ai />
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};
