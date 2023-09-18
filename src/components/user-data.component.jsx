import Image from 'next/image';

import LoadingSpinner from './loading-spinner.component';
import Profile from './profile.component';
import Description from './description.component';
import ContributionChart from './contribution-chart.component';

import { getContributionList } from '@/utils/utils';

export default function UserData({ loading, error, data }) {
  if (error) {
    return (
      error.message.includes('Could not resolve to a User') && (
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
      )
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (data !== undefined) {
    return (
      <div key={data.user.id} className='flex flex-col justify-between gap-6'>
        <Profile userData={data.user} />
        <Description userData={data.user} />
        <ContributionChart data={getContributionList(data.user)} />
      </div>
    );
  }
}
