import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const RepoCard = ({ repoData }) => {
  return (
    <div className='flex flex-col justify-between gap-3 bg-[#111122] pl-4 pr-4 py-4 rounded-md border-[1px] border-white/10 hover:border-pink-400/60 duration-200 md:pl-6 md:pr-8'>
      <div className="flex flex-col gap-2">
        <Link href={repoData.html_url} className="w-max text-md md:text-lg gradient-text">{repoData.name}</Link>
        {
          repoData.description &&
          <p className="text-xs md:text-sm">{repoData.description}</p>
        }
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiGitRepoForked className='text-md md:text-xl' />
          <p className="text-[14px] md:text-[16px] text-white">
            {repoData.forks_count}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AiFillStar className='text-md md:text-xl' />
          <p className="text-[14px] md:text-[16px] text-white">
            {repoData.stargazers_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
