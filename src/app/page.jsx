"use client";

import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "@/components/header.component";
import Profile from "@/components/profile.component";
import Description from "@/components/description.component";
import Footer from "@/components/footer.component";

import { JetBrains_Mono } from "next/font/google";
import LineChart from "@/components/line-chart.component";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const sampleData = [
  {
    date: "Sun Jan 02 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 302,
  },
  {
    date: "Sun Jan 09 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 196,
  },
  {
    date: "Sun Jan 16 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 143,
  },
  {
    date: "Sun Jan 23 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 102,
  },
  {
    date: "Sun Jan 30 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 20,
  },
  {
    date: "Sun Feb 06 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 42,
  },
  {
    date: "Sun Feb 13 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 2,
  },
  {
    date: "Sun Feb 20 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 122,
  },
  {
    date: "Sun Feb 27 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 203,
  },
  {
    date: "Sun Mar 06 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 202,
  },
  {
    date: "Sun Mar 13 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 20,
  },
  {
    date: "Sun Mar 20 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
    total: 22,
  },
];

export default function Home() {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState({});
  const [searchString, setSearchString] = useState("zelfroster");
  const [inputString, setInputString] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const userDataResponse = await fetch(
        `https://api.github.com/users/${searchString}`,
      );
      const userData = await userDataResponse.json();

      const userReposResponse = await fetch(
        `https://api.github.com/users/${searchString}/repos`,
      );
      const userRepos = await userReposResponse.json();

      setUserData(userData);
      setUserRepos(userRepos);
    };
    fetchData();
  }, [searchString]);
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
        className={`w-full min-h-screen flex flex-col justify-between bg-main text-white ${jetBrainsMono.className}`}
      >
        <div className="flex flex-col gap-10">
          <Header
            inputString={inputString}
            setInputString={setInputString}
            setSearchString={setSearchString}
          />
          {userData.message === "Not Found" ? (
            <main className="flex flex-col gap-6 items-center animate-shake">
              <Image
                src="/images/UserNotFound.png"
                width={180}
                height={100}
                alt="user not found image"
              />
              <h4 className="bg-lightPurple border-[1px] border-white/10 px-6 py-4 rounded-md text-2xl font-bold text-white/80 text-center">
                User Not Found
              </h4>
            </main>
          ) : (
            <main
              key={userData.id}
              className="container mx-auto flex flex-col gap-6"
            >
              <Profile data={userData} />
              <Description data={userData} repoData={userRepos} />
              <details className="bg-lightPurple border border-white/10 rounded-lg p-4">
                <summary>Contribution Graph</summary>
                <LineChart data={sampleData} />
              </details>
            </main>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
