'use client';

import { useState } from 'react';

import { useQuery } from '@apollo/client';

import Header from '@/components/header.component';
import Footer from '@/components/footer.component';
import SearchBox from '@/components/search-box.component';
import UserData from '@/components/user-data.component';

import { GET_USER_DATA } from '@/utils/utils';

export default function Home() {
  const [searchString, setSearchString] = useState('zelfroster');
  const { loading, data, error } = useQuery(GET_USER_DATA, {
    variables: {
      userName: searchString,
    },
  });
  return (
    <>
      <Header />
      <main className='container mx-auto mb-auto flex flex-col justify-between gap-6'>
        <SearchBox setSearchString={setSearchString} />
        <UserData error={error} loading={loading} data={data} />
      </main>
      <Footer />
    </>
  );
}
