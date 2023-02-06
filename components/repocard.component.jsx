import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const RepoCard = ({ repoData }) => {
  return (
    <div className='flex flex-col gap-2 bg-[#111122] pl-6 pr-8 py-4 rounded-md border-[1px] border-white/10'>
      <Link href={repoData.html_url} className="text-lg">{repoData.name}</Link>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <BiGitRepoForked className='text-xl' />
          <p className="text-lg">
            {repoData.forks_count}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AiFillStar className='text-xl' />
          <p className="text-lg">
            {repoData.stargazers_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
