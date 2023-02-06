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
    <section className="px-10 py-6 flex gap-10 justify-between bg-lightPurple border-[1px] border-white/10 rounded-lg">
      {
        data.avatar_url ?
          <Image
            src={data.avatar_url}
            width="120"
            height="120"
            alt="user image"
            className="rounded-full border-pink-400 border-2"
          />
          : <div className="bg-white/10 h-[120px] w-[120px] rounded-full shrink-0"></div>
      }
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-3 items-left">
          <h2 className="text-3xl font-semibold">{data.name}</h2>
          <div className="flex items-center -mt-2">
            <p className="text-xl gradient-text font-medium">
              @{data.login}
            </p>
            <p className="text-md text-white/70 mx-2">●</p>
            <p className="text-[16px] text-white/50">
              Joined {accountCreationDate}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-right text-right">
          <div className="flex gap-6 justify-end">
            {
              data.blog &&
              <Link href={'/data.blog'} >
                <Image src={LinkIcon} width="auto" height="auto" alt="blog link icon" />
              </Link>
            }
            {
              data.email &&
              <Link href={'/data.email'} >
                <Image src={MailIcon} width="auto" height="auto" alt="email icon" />
              </Link>
            }
            {
              data.twitter_username &&
              <Link href={`https://twitter.com/${data.twitter_username}`} target="_blank" >
                <Image src={TwitterIcon} width="auto" height="auto" alt="twitter icon" />
              </Link>
            }
          </div>
          <div className="flex items-center">
            <Image src={PeopleIcon} alt="people icon" />
            <div className="flex items-end gap-1">
              <p className="text-lg text-white">
                &nbsp;{data.followers}
              </p>
              <p className="text-white/50 inline-block mb-[1px] text-[16px] tracking-tighter">
                followers
              </p>
            </div>
            <p className="text-md text-white/70 mx-2">●</p>
            <div className="flex items-end gap-1">
              <p className="text-lg text-white">
                {data.following}
              </p>
              <p className="text-white/50 inline-block mb-[1px] text-[16px] tracking-tighter">
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
