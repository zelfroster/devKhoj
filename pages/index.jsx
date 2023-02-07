import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../components/header.component";
import Profile from "../components/profile.component";
import Description from "../components/description.component.jsx";

import { JetBrains_Mono } from "@next/font/google";
import Footer from "../components/footer.component";

const jetBrainsMono = JetBrains_Mono({
  subsets: "latin",
});

export default function Home() {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState({});
  const [searchString, setSearchString] = useState("rakeshsangem");
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
        <Header inputString={inputString} setInputString={setInputString} setSearchString={setSearchString} />
        {
          userData.message === "Not Found" ?
            <h4 className="text-xl text-white text-center py-8">User Not Found</h4>
            : <main className="container mx-auto mt-10 flex flex-col gap-6">
              <Profile data={userData} />
              <Description data={userData} repoData={userRepos} />
            </main>
        }
        <Footer />
      </div>
    </>
  );
}
