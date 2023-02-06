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
    <section className="mb-40 px-4 py-6 flex gap-10 flex-col justify-between bg-lightPurple border-[1px] border-white/10 rounded-lg md:p-10">
      <div className="flex flex-col justify-between w-full gap-10 md:flex-row">
        <div className="flex flex-col justify-start items-start gap-2">
          <h3 className="gradient-text text-xl">Profile Bio</h3>
          <p className="text-white/80">{data.bio}</p>
        </div>
        {
          (data.location || data.company) &&
          <div className="pl-4 pr-2 py-2 flex gap-2 flex-col h-max bg-[#ffffff06] items-start rounded-md md:items-end">
            {
              data.location &&
              <div className="w-max flex flex-row-reverse gap-1 items-center md:flex-row">
                <h3 className="text-white/80">{data.location}</h3>
                <Image src={LocationIcon} width="auto" height="auto" alt="blog link icon" />
              </div>
            }
            {
              data.company &&
              <div className="flex gap-1 flex-row-reverse items-center md:flex-row">
                <h3 className="text-white/80">{data.company}</h3>
                <Image src={OrganisationIcon} width="auto" height="auto" alt="blog link icon" />
              </div>
            }
          </div>
        }
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl gradient-text w-max">Most Starred Repositories</h2>
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
