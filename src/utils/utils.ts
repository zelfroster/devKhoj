import { gql } from '@apollo/client';

export type UserDataObjType = {
  id: number;
  name: string;
  login: string;
  email: string;
  bio: string;
  company: string;
  location: string;
  avatarUrl: string;
  websiteUrl: string;
  twitterUsername: string;
  createdAt: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  repositories: {
    nodes: RepositoryNodeObjType[];
  };
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: WeekObjType[];
    };
  };
};

type WeekObjType = {
  contributionDays: ContributionObjType[];
};

export type ContributionObjType = {
  contributionCount: number;
  date: string;
};

type ContributionListType = {
  totalDays: number;
  contributionList: ContributionObjType[];
};

export type RepositoryNodeObjType = {
  id: string;
  url: string;
  name: string;
  forkCount: number;
  stargazerCount: number;
  description: string;
};

export const GET_USER_DATA = gql`
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

export function getContributionList(userData: UserDataObjType, days = 45) {
  if (userData?.contributionsCollection) {
    // Get Latest 45 days contribution

    const { totalDays, contributionList } =
      userData.contributionsCollection.contributionCalendar.weeks.reduce(
        (acc: ContributionListType, curr) => {
          acc.contributionList = [
            ...acc.contributionList,
            ...curr.contributionDays,
          ];
          acc.totalDays += curr.contributionDays.length;
          return acc;
        },
        { totalDays: 0, contributionList: [] },
      );

    const contributionArray = contributionList.slice(
      totalDays - days,
      totalDays + 1,
    );

    return contributionArray;
  } else return [];
}
