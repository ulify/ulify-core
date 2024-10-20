import { Group } from './group';

export const Result = () => {
  const list: Array<ExtensionsType> = [
    {
      title: '截图',
      path: 'pth',
      description: '快速截图',
      author: 'Lance Li',
      version: '0.0.1',
      homepage: 'https://github.com/xf079/toolify',
      icon: 'https://avatars.githubusercontent.com/u/63334662?s=48&v=4'
    },
    {
      title: 'OCR翻译',
      path: 'pth',
      description: '快速截图',
      author: 'Lance Li',
      version: '0.0.1',
      homepage: 'https://github.com/xf079/toolify',
      icon: 'https://avatars.githubusercontent.com/u/63334662?s=48&v=4'
    }
  ];

  return (
    <div>
      <Group title='最近使用' list={list} />
      <Group title='固定应用' list={list} />
      <Group title='系统应用' list={list} type='horizontal' />
      <Group title='匹配推荐' list={list} />
      <Group title='匹配推荐' list={list} />
      <Group title='匹配推荐' list={list} />
    </div>
  );
};
