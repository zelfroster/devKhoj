import { useState } from 'react';
import Image from 'next/image';
import { SearchIcon } from '@/public/icons';

export default function SearchBox({ setSearchString }) {
  const [inputString, setInputString] = useState('');

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
    <section
      id='search-bar'
      className='mx-auto mb-auto flex w-full max-w-3xl flex-row-reverse gap-4 rounded-lg border-[1px] border-white/10 bg-lightPurple py-3 pl-4 pr-3 md:flex-row md:gap-8 md:pl-6'
    >
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
          className='hidden rounded-md border-[1px] border-white/10 bg-white/5 px-6 py-2 text-lg font-bold duration-100 hover:bg-transparent md:block md:px-8 md:py-3'
          onClick={handleSubmit}
        >
          <Image
            src={SearchIcon}
            width={25}
            height={25}
            className='cursor-pointer md:w-8'
            alt='search-icon'
          />
        </button>
      </form>
    </section>
  );
}
