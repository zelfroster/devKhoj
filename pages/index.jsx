import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link.js";

import Profile from "../components/profile.component";
import Description from "../components/description.component.jsx";

import { SiGithub } from 'react-icons/si'

import { SearchIcon } from "../public/index.js";

import { Sora, JetBrains_Mono } from "@next/font/google";

// Google Fonts imported from @next/font/google
const sora = Sora({
  weight: "700",
  subsets: "latin",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: "latin",
});

export default function Home() {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState({});
  const [searchString, setSearchString] = useState("Dun-sin");
  const [inputString, setInputString] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const userDataResponse = await fetch(
        `https://api.github.com/users/${searchString}`,
      );
      const userData = await userDataResponse.json();

      const userReposResponse = await fetch(
        `https://api.github.com/users/${searchString}/repos`
      )
      const userRepos = await userReposResponse.json();

      setUserData(userData);
      setUserRepos(userRepos);
    };
    fetchData();
  }, [searchString]);
  const handleChange = (event) => {
    setInputString(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(inputString);
  };
  return (
    <>
      <Head>
        <title>devKhoj</title>
        <meta
          name="description"
          content="A place to find information about developers github account"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`w-full min-h-screen bg-main text-white ${jetBrainsMono.className}`}
      >
        <header className="container mx-auto">
          <nav className="flex justify-between py-10 md:py-12">
            <p className={`gradient-text font-bold text-3xl ${sora.className}`}>
              devKhoj
            </p>
            <Link
              href={'https://github.com/zelfroster/devkhoj'}
            >
              <SiGithub className="text-4xl p-1 rounded-md bg-gradient-to-r from-[#FF6C6CCC] to-[#8C8AFFCC]" />
            </Link>
          </nav>
          <div
            id="search-bar"
            className="max-w-3xl mx-auto pl-4 pr-3 py-3 flex flex-row-reverse gap-4 w-full bg-lightPurple rounded-lg border-[1px] border-white/10 md:gap-8 md:pl-8 md:flex-row"
          >
            <Image src={SearchIcon} width={25} height={25} className="cursor-pointer md:w-8" alt="search-icon" onClick={handleSubmit} />
            <form className="flex justify-between w-full">
              <input
                type="search"
                className="w-full bg-transparent text-white/80 text-md outline-none caret-pink-300 md:text-xl"
                placeholder="Search Github User..."
                value={inputString}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="hidden px-6 py-2 bg-gradientButton rounded-md text-lg font-bold  border-[1px] border-[#A4A4A4] md:py-3 md:px-8 md:block"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </header>
        {
          userData.message === "Not Found" ?
            <h4 className="text-xl text-white text-center py-8">User Not Found</h4>
            : <main className="container mx-auto mt-10 flex flex-col gap-6">
              <Profile data={userData} />
              <Description data={userData} repoData={userRepos} />
            </main>
        }
      </div>
    </>
  );
}
{/**/ }
{/* export async function getStaticProps() { */ }
{/*   const response = await fetch( */ }
{/*     `https://api.github.com/users/${searchString}`, */ }
{/*   ); */ }
{/*   const data = await response.json(); */ }
{/**/ }
{/*   return { */ }
{/*     props: { */ }
{/*       data */ }
{/*     } */ }
{/*   } */ }
{/* } */ }
