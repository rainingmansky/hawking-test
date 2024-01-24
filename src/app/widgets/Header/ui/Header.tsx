export const Header = () => {
  return <nav className="w-full flex justify-between h-20 bg-header-bg px-40 py-3 items-center">
    <section className='flex gap-x-2'>
    <h1 className='text-center'>Market</h1>
    <div>
      <input type="text" className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6" placeholder="0.00"' />
    </div>
    </section>
    <ul className='flex gap-x-20'>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
  </nav>
}