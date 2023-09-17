import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';

export default function RepoCard({ repoData }) {
  return (
    <div className='flex grow flex-col justify-between gap-3 rounded-md border-[1px] border-white/10 bg-[#111122] py-4 pl-4 pr-4 duration-200 hover:border-pink-400/60 md:pl-6 md:pr-8'>
      <div className='flex flex-col gap-2'>
        <Link
          href={repoData.url}
          className='text-md gradient-text w-max md:text-lg'
        >
          {repoData.name}
        </Link>
        {repoData.description && (
          <p className='text-xs md:text-sm'>{repoData.description}</p>
        )}
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center gap-2'>
          <BiGitRepoForked className='text-md md:text-xl' />
          <p className='text-[14px] text-white md:text-[16px]'>
            {repoData.forkCount}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <AiFillStar className='text-md md:text-xl' />
          <p className='text-[14px] text-white md:text-[16px]'>
            {repoData.stargazerCount}
          </p>
        </div>
      </div>
    </div>
  );
}
