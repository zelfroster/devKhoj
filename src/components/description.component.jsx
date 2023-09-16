import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LocationIcon, OrganisationIcon } from '@/public/icons';
import RepoCard from './repo-card.component';

export default function Description({ userData }) {
  return (
    //temp margin
    <section className='flex animate-slideDown flex-col justify-between gap-10 rounded-lg border-[1px] border-white/10 bg-lightPurple p-6 text-white/80 md:p-10'>
      <div className='flex w-full flex-col justify-between gap-6 md:flex-row md:gap-10'>
        <div className='flex flex-col items-start justify-start gap-2'>
          <h3 className='gradient-text text-xl font-medium'>Profile Bio</h3>
          <p className='text-[14px] md:text-[16px]'>{userData.bio}</p>
        </div>
        {(userData.location || userData.company) && (
          <div className='flex h-max flex-col items-start gap-2 rounded-md bg-[#ffffff06] py-3 pl-4 pr-2 md:items-end md:py-2'>
            {userData.location && (
              <div className='flex w-max flex-row-reverse items-center gap-1 md:flex-row'>
                <p className='text-[14px] md:text-[16px]'>
                  {userData.location}
                </p>
                <Image
                  src={LocationIcon}
                  width={25}
                  height={25}
                  className='md:w-8'
                  alt='blog link icon'
                />
              </div>
            )}
            {userData.company && (
              <div className='flex w-max flex-row-reverse items-center gap-1 md:flex-row'>
                <p className='text-[14px] md:text-[16px]'>{userData.company}</p>
                <Image
                  src={OrganisationIcon}
                  width={25}
                  height={25}
                  className='md:w-8'
                  alt='blog link icon'
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='gradient-text w-max text-xl font-medium'>
          Most Starred Repo
        </h2>
        {/* <div className='flex flex-col gap-4 md:flex-row'>
          {Array.from(mostStarredRepoArray)
            .slice(0, 3)
            .map((item) => (
              <RepoCard key={item.id} repoData={item} />
            ))}
        </div> */}
      </div>
    </section>
  );
}
