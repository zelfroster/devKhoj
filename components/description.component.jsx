import Image from 'next/image'
import { LocationIcon, OrganisationIcon } from '../public/index.js'

const Description = ({ data }) => {
  return (
    <section className="px-10 py-6 flex gap-10 justify-between bg-lightPurple border-[1px] border-white/10 rounded-lg">
      <div className="flex justify-between w-full gap-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <h3 className="gradient-text text-xl">Profile Bio</h3>
          <p className="text-white/80">{data.bio}</p>
        </div>
        <div className="pl-4 pr-2 py-2 flex gap-2 flex-col h-max bg-[#ffffff06] items-end rounded-md">
          <div className="w-max flex items-center">
            <h3 className="text-white/80">{data.location}</h3>
            <Image src={LocationIcon} alt="location icon" />
          </div>
          <div className="flex items-center">
            <h3 className="text-white/80">{data.company}</h3>
            <Image src={OrganisationIcon} alt="organisation icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
