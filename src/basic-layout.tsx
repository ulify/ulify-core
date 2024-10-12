import { SiderBar } from '@/components/sider-bar/sider-bar.tsx';
import { useShallow } from 'zustand/react/shallow';
import { Search } from '@/pages/search/search.tsx';
import { Ai } from '@/pages/ai/ai.tsx';
import { isWindows } from '@/utils/device.ts';
import { Show } from '@/components/common/show.tsx';
import { WindowBar } from '@/components/window-bar/window-bar.tsx';
import { useGlobal } from '@/stores/global.ts';

export const BasicLayout = () => {
  const { mode } = useGlobal(
    useShallow((state) => ({
      mode: state.actionMode
    }))
  );

  return (
    <div className='w-full h-full flex flex-row bg-[linear-gradient(40deg,rgb(108, 0, 162),rgb(0, 17, 82))] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <SiderBar />
      <div className='flex-1 overflow-hidden h-full flex flex-col'>
        <Show when={!isWindows()}>
          <WindowBar />
        </Show>
        <div className='flex-1 overflow-hidden bg-background/70 backdrop-blur-md'>
          <Show when={mode === 'search'}>
            <Search />
          </Show>
          <Show when={mode === 'ai'}>
            <Ai />
          </Show>
        </div>
      </div>
    </div>
  );
};
