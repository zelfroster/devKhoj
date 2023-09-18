import Link from 'next/link';

import { SiGithub } from 'react-icons/si';

import { Sora } from 'next/font/google';

const sora = Sora({
  weight: '700',
  subsets: ['latin'],
});

export default function Header() {
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
    </header>
  );
}
