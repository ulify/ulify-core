import { ApplicationGroup } from '@/components/content/application-group.tsx';

export const Content = () => {
  const recordList = [
    {
      title: '截图',
      icon: 'https://'
    },
    {
      title: '计算器',
      icon: 'https://'
    }
  ];
  const fixedList = [
    {
      title: '截图',
      icon: 'https://'
    },
    {
      title: '计算器',
      icon: 'https://'
    }
  ];
  return (
    <div>
      <ApplicationGroup title='最近使用' list={recordList} />
      <ApplicationGroup title='固定应用' list={fixedList} />
    </div>
  );
};
