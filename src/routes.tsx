import { createMemoryRouter, Navigate } from 'react-router-dom';
import { BasicLayout } from '@/basic-layout.tsx';
import { Search } from '@/pages/search/search.tsx';
import { Ai } from '@/pages/ai/ai.tsx';
import { Extensions } from '@/pages/extensions/extension.tsx';

const router = createMemoryRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/search' />
      },
      {
        path: '/search',
        index: true,
        element: <Search />
      },
      {
        path: '/ai',
        element: <Ai />
      },
      {
        path: '/extensions',
        element: <Extensions />
      }
    ]
  }
]);

export default router;
