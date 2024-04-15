import fetch from 'node-fetch';
const TOKEN = process.env.GITHUB_TOKEN;
const query = `
query {
  user(login: "stodian"){
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

export async function retrieveContributionData(): Promise<Externals.Github.ApiResponse> {
  const body = {
    query
  };
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body)
  });
  return res.json();
}
