import { FooterBar } from '@/components/footer/footer-bar.tsx';


export const Footer = ()=>{
  return (
    <div className='w-full h-12 bg-muted/40 flex flex-row justify-between items-center'>
      <FooterBar />
      <div className='text-xs text-muted-foreground'>
        <a href="https://github.com/yangyangyangyangyangyangyangyangyangyangy" />
      </div>
    </div>
  )
}