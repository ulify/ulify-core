
export const SearchBar = () => {
  return (
    <div className='w-full bg-muted flex flex-row rounded-xl justify-center items-center border border-muted/80 transition-all focus-within:bg-background focus-within:shadow'>
      <div className='w-10 h-10 flex flex-row justify-center items-center text-foreground'>
        <span className='icon-[ep--search] w-5 h-5'></span>
      </div>
      <input className='outline-none bg-transparent flex-1 h-12 text-sm font-extralight' placeholder='Search By...' />
    </div>
  )
}