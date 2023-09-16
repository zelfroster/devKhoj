'use client';

import { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/header.component';
import Profile from '@/components/profile.component';
import Description from '@/components/description.component';
import Footer from '@/components/footer.component';
import LineChart from '@/components/line-chart.component';

import sampleData from '../data/sample-data.json';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

export default function Home() {
  const [userData, setUserData] = useState({});
  const [searchString, setSearchString] = useState('zelfroster');
  const [inputString, setInputString] = useState('');
  useEffect(() => {
    const fetchData = () => {
      const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        cache: new InMemoryCache(),
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN}`,
        },
      });

      client
        .query({
          query: gql`
            {
              user(login: "subhoghoshX") {
                id
                name
                login
                email
                bio
                company
                location
                avatarUrl
                websiteUrl
                twitterUsername
                createdAt
                followers {
                  totalCount
                }
                following {
                  totalCount
                }
                repositories(
                  first: 3
                  ownerAffiliations: OWNER
                  privacy: PUBLIC
                  isFork: false
                  orderBy: { field: STARGAZERS, direction: DESC }
                ) {
                  totalCount
                  nodes {
                    name
                    forkCount
                    stargazerCount
                    description
                  }
                }
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                      }
                    }
                  }
                }
              }
            }
          `,
        })
        .then((res) => {
          console.log(res);
          setUserData(res.data.user);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [searchString]);
  return (
    <>
      <Head>
        <title>devKhoj</title>
        <meta
          name='description'
          content='A place to find information about developers github account'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className={`flex min-h-screen w-full flex-col justify-between bg-main text-white ${jetBrainsMono.className}`}
      >
        <div className='flex flex-col gap-10'>
          <Header
            inputString={inputString}
            setInputString={setInputString}
            setSearchString={setSearchString}
          />
          {userData.message === 'Not Found' ? (
            <main className='flex animate-shake flex-col items-center gap-6'>
              <Image
                src='/images/UserNotFound.png'
                width={180}
                height={100}
                alt='user not found image'
              />
              <h4 className='rounded-md border-[1px] border-white/10 bg-lightPurple px-6 py-4 text-center text-2xl font-bold text-white/80'>
                User Not Found
              </h4>
            </main>
          ) : (
            <main
              key={userData.id}
              className='container mx-auto flex flex-col gap-6'
            >
              <Profile userData={userData} />
              <Description userData={userData} />
              <details className='rounded-lg border border-white/10 bg-lightPurple p-4'>
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
