import Image from 'next/image';
import Link from 'next/link.js';

import { MailIcon, TwitterIcon, LinkIcon, PeopleIcon } from '@/public/icons';

export default function Profile({ userData }) {
  const {
    avatarUrl,
    name,
    login,
    createdAt,
    websiteUrl,
    email,
    twitterUsername,
    followers,
    following,
  } = userData;
  return (
    <section className='flex animate-slideDown flex-col items-center justify-center gap-4 rounded-lg border-[1px] border-white/10 bg-lightPurple px-4 py-6 md:flex-row md:justify-between md:gap-10 md:px-10'>
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          width='80'
          height='80'
          alt='user image'
          className='rounded-full border-2 border-pink-400 md:w-[120px]'
        />
      ) : (
        <div className='h-[100px] w-[100px] shrink-0 rounded-full bg-white/10'></div>
      )}
      <div className='flex w-full flex-col items-center justify-between gap-1 lg:flex-row'>
        <div className='items-left flex flex-col gap-3'>
          <h2 className='text-center text-3xl font-semibold lg:text-left'>
            {name}
          </h2>
          <div className='-mt-2 flex flex-col flex-wrap items-center justify-center xs:flex-row'>
            <p className='gradient-text text-lg font-medium lg:text-xl'>
              @{login}
            </p>
            <p className='mx-2 -mb-1 hidden text-xs text-white/70 xs:block'>
              ●
            </p>
            <p className='-mb-1 text-[14px] text-white/50 lg:text-[16px]'>
              Joined {createdAt && createdAt.replace(/T[^.]+$/, '')}
            </p>
          </div>
        </div>
        <div className='items-right flex flex-col-reverse items-center gap-3 text-right xs:flex-row-reverse sm:gap-6 md:items-end lg:flex-col lg:gap-2'>
          <div className='flex justify-end gap-4 md:gap-6'>
            {websiteUrl && (
              <Link href={websiteUrl}>
                <Image
                  src={LinkIcon}
                  width={25}
                  height={25}
                  className='md:w-8'
                  alt='blog link icon'
                />
              </Link>
            )}
            {email && (
              <Link href={email}>
                <Image
                  src={MailIcon}
                  width={25}
                  height={25}
                  className='md:w-8'
                  alt='email icon'
                />
              </Link>
            )}
            {twitterUsername && (
              <Link
                href={`https://twitter.com/${twitterUsername}`}
                target='_blank'
              >
                <Image
                  src={TwitterIcon}
                  width={25}
                  height={25}
                  className='md:w-8'
                  alt='twitter icon'
                />
              </Link>
            )}
          </div>
          <div className='flex items-center text-[14px]'>
            <Image
              src={PeopleIcon}
              width={25}
              height={25}
              className='md:w-8'
              alt='people icon'
            />
            <div className='flex items-end gap-1'>
              <p className='text-white md:text-lg'>
                &nbsp;{followers && followers.totalCount}
              </p>
              <p className='inline-block tracking-tighter text-white/50 md:mb-[1px] md:text-[16px]'>
                followers
              </p>
            </div>
            <p className='mx-2 text-xs text-white/70'>●</p>
            <div className='flex items-end gap-1'>
              <p className='text-white md:text-lg'>
                {following && following.totalCount}
              </p>
              <p className='inline-block tracking-tighter text-white/50 md:mb-[1px] md:text-[16px]'>
                following
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
