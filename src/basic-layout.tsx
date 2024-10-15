import { Sider } from '@/components/sider/sider.tsx';
import { Outlet } from 'react-router-dom';

export const BasicLayout = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <Sider />
      <div className='w-full flex-1'>
        <Outlet />
      </div>
    </div>
  );
};
