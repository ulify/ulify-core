import { App as AntdApp, Avatar, Button, ConfigProvider, Tag, theme } from 'antd';

export const Search = () => {
  return (
    <div className='h-16 flex justify-between items-center gap-3 px-3 border-b border-b-gray-100/80'>
      <div className='relative cursor-pointer'>
        <Avatar
          size={42}
          shape='square'
          className='bg-zinc-100'
          icon={<span className='icon-[token-branded--nav]' />}
        >
          UL
        </Avatar>
      </div>
      <div className='flex-1 h-full'>
        <input
          placeholder='Hi Ulify'
          className='outline-none h-full w-full bg-transparent font-light text-xl'
        />
      </div>
      <Tag className='opacity-60'>Esc</Tag>
    </div>
  );
};


export const Result = ()=>{
  return (
    <div>123</div>
  )
}

export const ContentWrapper = ()=>{
  return (
    <div>

    </div>
  )
}

function App() {
  return (
    <ConfigProvider theme={{ cssVar: true }} prefixCls='u'>
      <AntdApp className='app-container'>
        <Search />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
