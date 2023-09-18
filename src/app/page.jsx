'use client';

import { useState } from 'react';

import { useQuery, gql } from '@apollo/client';

import Header from '@/components/header.component';
import Profile from '@/components/profile.component';
import Description from '@/components/description.component';
import Footer from '@/components/footer.component';
import SearchBox from '@/components/search-box.component';
import ContributionChart from '@/components/contribution-chart.component';
import UserWrapper from '@/components/user-wrapper.component';

import { getContributionList } from '@/utils/utils';

export default function Home() {
  const [searchString, setSearchString] = useState('zelfroster');
  const GET_USER_DATA = gql`
    query ($userName: String!) {
      user(login: $userName) {
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
          nodes {
            id
            url
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
  `;
  const { loading, data, error } = useQuery(GET_USER_DATA, {
    variables: {
      userName: searchString,
    },
  });
  console.log(data, loading, error);
  return (
    <>
      <Header />
      <main className='container mx-auto flex min-h-[70vh] flex-col justify-between gap-6'>
        <SearchBox setSearchString={setSearchString} />
        <UserWrapper error={error} loading={loading}>
          {data && (
            <div className='flex flex-col justify-between gap-6'>
              <Profile userData={data.user} />
              <Description userData={data.user} />
              <ContributionChart data={getContributionList(data.user)} />
            </div>
          )}
        </UserWrapper>
      </main>
      <Footer />
    </>
  );
}

{
  /*error && error.type === 'NOT_FOUND' ? (
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
          */
}
