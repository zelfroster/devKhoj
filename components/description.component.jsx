import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LocationIcon, OrganisationIcon } from '../public/index.js'
import RepoCard from './repocard.component.jsx'

const Description = ({ data, repoData }) => {
  const [mostStarredRepoArray, setMostStarredRepoArray] = useState([])
  useEffect(() =>
    setMostStarredRepoArray(Array.from(repoData)
      .filter(item => item.stargazers_count > 0)
      .sort((a, b) => a.stargazers_count > b.stargazers_count ? 1 : -1)
      .reverse()
    ),
    [repoData]
  )
  return (
    //temp margin
    <section className="p-6 text-white/80 flex gap-10 flex-col justify-between bg-lightPurple border-[1px] border-white/10 rounded-lg md:p-10">
      <div className="flex gap-6 flex-col justify-between w-full md:gap-10 md:flex-row">
        <div className="flex flex-col justify-start items-start gap-2">
          <h3 className="gradient-text text-xl font-medium">Profile Bio</h3>
          <p className="text-[14px] md:text-[16px]">{data.bio}</p>
        </div>
        {
          (data.location || data.company) &&
          <div className="pl-4 pr-2 py-3 flex gap-2 flex-col h-max bg-[#ffffff06] items-start rounded-md md:items-end md:py-2">
            {
              data.location &&
              <div className="w-max flex flex-row-reverse gap-1 items-center md:flex-row">
                <p className="text-[14px] md:text-[16px]">{data.location}</p>
                <Image src={LocationIcon} width={25} height={25} className="md:w-8" alt="blog link icon" />
              </div>
            }
            {
              data.company &&
              <div className="w-max flex gap-1 flex-row-reverse items-center md:flex-row">
                <p className="text-[14px] md:text-[16px]">{data.company}</p>
                <Image src={OrganisationIcon} width={25} height={25} className="md:w-8" alt="blog link icon" />
              </div>
            }
          </div>
        }
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl gradient-text w-max font-medium">Most Starred Repo</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          {Array
            .from(mostStarredRepoArray)
            .slice(0, 3)
            .map(item =>
              <RepoCard key={item.id} repoData={item} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Description
