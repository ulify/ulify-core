import { Badge } from '@/components/ui/badge.tsx';

export const ShortcutType = ()=>{
  return (
    <div className='flex flex-row items-center gap-2 pl-10 pt-2'>
      <Badge variant='secondary' >插件</Badge>
      <Badge variant='secondary' >应用</Badge>
      <Badge variant='secondary' >文件</Badge>
      <Badge variant='secondary' >文档</Badge>
    </div>
  )
}