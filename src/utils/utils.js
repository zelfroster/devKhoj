import { gql } from '@apollo/client';

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

export function getContributionList(userData, days = 45) {
  if (userData?.contributionsCollection) {
    // Get Latest 45 days contribution

    const { totalDays, contributionList } =
      userData.contributionsCollection.contributionCalendar.weeks.reduce(
        (acc, curr) => {
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
