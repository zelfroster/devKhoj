import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

import { SearchIcon } from '@/public/icons';

import { Sora } from 'next/font/google';

const sora = Sora({
  weight: '700',
  subsets: ['latin'],
});

export default function Header({
  inputString,
  setInputString,
  setSearchString,
}) {
  const handleChange = (event) => {
    setInputString(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputString === '') {
      return;
    }
    setSearchString(inputString);
  };
  return (
    <header className='container mx-auto'>
      <nav className='flex justify-between py-10 md:py-12'>
        <Link
          href={'/'}
          className={`gradient-text text-3xl font-bold ${sora.className}`}
        >
          devKhoj
        </Link>
        <Link href={'https://github.com/zelfroster/devkhoj'}>
          <SiGithub className='rounded-md bg-gradient-to-r from-[#FF6C6CCC] to-[#8C8AFFCC] p-1 text-4xl hover:border-[1px] hover:border-white/20 hover:from-[#FF6C6C00] hover:to-[#8C8AFF00]' />
        </Link>
      </nav>
      <div
        id='search-bar'
        className='mx-auto flex w-full max-w-3xl flex-row-reverse gap-4 rounded-lg border-[1px] border-white/10 bg-lightPurple py-3 pl-4 pr-3 md:flex-row md:gap-8 md:pl-8'
      >
        <Image
          src={SearchIcon}
          width={25}
          height={25}
          className='cursor-pointer md:w-8'
          alt='search-icon'
          onClick={handleSubmit}
        />
        <form className='flex w-full justify-between'>
          <input
            type='search'
            className='text-md w-full bg-transparent text-white/80 caret-pink-300 outline-none md:text-xl'
            placeholder='Search Github User...'
            value={inputString}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='hidden rounded-md border-[1px] border-[#A4A4A4] bg-gradientButton px-6  py-2 text-lg font-bold duration-300 hover:border-[#D4D4D4] md:block md:px-8 md:py-3'
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
