import { useState, useEffect } from 'react'
import Image from "next/image";
import {
  MailIcon,
  TwitterIcon,
  LinkIcon,
  PeopleIcon,
} from "../public/index.js";
import Link from 'next/link.js';

const Profile = ({ data }) => {
  const [accountCreationDate, setaAcountCreationDate] = useState("")
  useEffect(() => {
    data.created_at ? setaAcountCreationDate(data.created_at.replace(/T[^.]+$/, "")) : "";
  }, [data.created_at]);
  return (
    <section className="px-4 py-6 flex flex-col justify-center items-center gap-4 bg-lightPurple border-[1px] border-white/10 rounded-lg md:px-10 md:gap-10 md:justify-between md:flex-row">
      {
        data.avatar_url ?
          <Image
            src={data.avatar_url}
            width="80"
            height="80"
            alt="user image"
            className="rounded-full border-pink-400 border-2 md:w-[120px]"
          />
          : <div className="bg-white/10 h-[120px] w-[120px] rounded-full shrink-0"></div>
      }
      <div className="flex flex-col gap-2 justify-between items-center w-full md:flex-row">
        <div className="flex flex-col gap-3 items-left">
          <h2 className="text-3xl font-semibold text-center md:text-left">{data.name}</h2>
          <div className="flex flex-wrap justify-center items-center -mt-2">
            <p className="text-lg gradient-text font-medium md:text-xl">
              @{data.login}
            </p>
            <p className="text-xs text-white/70 mx-2">●</p>
            <p className="text-[14px] text-white/50 mt-1 md:mt-0">
              Joined {accountCreationDate}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-3 items-right text-right md:flex-col">
          <div className="flex gap-4 justify-end md:gap-6">
            {
              data.blog &&
              <Link href={'/data.blog'} >
                <Image src={LinkIcon} width={25} height={25} className="md:w-8" alt="blog link icon" />
              </Link>
            }
            {
              data.email &&
              <Link href={'/data.email'} >
                <Image src={MailIcon} width={25} height={25} className="md:w-8" alt="email icon" />
              </Link>
            }
            {
              data.twitter_username &&
              <Link href={`https://twitter.com/${data.twitter_username}`} target="_blank" >
                <Image src={TwitterIcon} width={25} height={25} className="md:w-8" alt="twitter icon" />
              </Link>
            }
          </div>
          <div className="flex text-[14px] items-center">
            <Image src={PeopleIcon} width={25} height={25} className="md:w-8" alt="people icon" />
            <div className="flex items-end gap-1">
              <p className="md:text-lg text-white">
                &nbsp;{data.followers}
              </p>
              <p className="text-white/50 inline-block md:mb-[1px] md:text-[16px] tracking-tighter">
                followers
              </p>
            </div>
            <p className="text-xs text-white/70 mx-2 md:text-lg">●</p>
            <div className="flex items-end gap-1">
              <p className="md:text-lg text-white">
                {data.following}
              </p>
              <p className="text-white/50 inline-block md:mb-[1px] md:text-[16px] tracking-tighter">
                following
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
