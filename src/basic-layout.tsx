import { useShallow } from 'zustand/react/shallow';

import { useGlobal } from '@/stores/global.ts';

import { Header } from '@/components/header/header.tsx';
import { Footer } from '@/components/footer/footer.tsx';
import { Content } from '@/components/content/content.tsx';

export const BasicLayout = () => {
  const { mode } = useGlobal(
    useShallow((state) => ({
      mode: state.actionMode
    }))
  );

  return (
    <div className='w-full h-full flex flex-col font-[Roboto Mono]'>
      <Header />
      <div className='w-full flex-1'>
        <Content />
      </div>
      {/*<div className='absolute left-0 right-0 top-0 bottom-0 flex flex-row bg-background/90 backdrop-blur-md'>
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
      </div>*/}
      <Footer />
    </div>
  );
};
