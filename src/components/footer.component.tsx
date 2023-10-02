import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='pb-6 pt-10 text-center text-xs text-white/70 md:text-sm'>
      <div className='container flex items-center justify-center gap-2'>
        <p>Built by </p>
        <Link
          href={'https://zelfroster.co'}
          className='gradient-text flex items-center gap-[2px]'
        >
          <p className='-mb-[2px] text-[14px] md:text-[20px]'>&copy;</p>
          <p className='gradient-text '>Zelfroster </p>
        </Link>
        <p>{Date().split(' ').at(3)}</p>
      </div>
    </footer>
  );
}
