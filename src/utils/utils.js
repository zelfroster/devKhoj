export function getContributionList(userData, days = 45) {
  if (userData.contributionsCollection) {
    const daysInLeapYear = 366;

    // Get Latest 45 days contribution
    const contributionListArray =
      userData.contributionsCollection.contributionCalendar.weeks
        .reduce((acc, curr) => (acc = [...acc, ...curr.contributionDays]), [])
        .slice(daysInLeapYear - days, daysInLeapYear);

    return contributionListArray;
  } else return [];
}
