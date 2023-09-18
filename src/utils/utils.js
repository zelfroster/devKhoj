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
    const daysInLeapYear = 366;

    // Get Latest 45 days contribution
    const contributionListArray =
      userData.contributionsCollection.contributionCalendar.weeks
        .reduce((acc, curr) => (acc = [...acc, ...curr.contributionDays]), [])
        .slice(daysInLeapYear - days, daysInLeapYear + 1);

    return contributionListArray;
  } else return [];
}
