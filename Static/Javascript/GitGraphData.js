const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

// GitHub personal access token
const accessToken = 'YOUR_ACCESS_TOKEN';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${accessToken}`
  },
  cache: new InMemoryCache()
});

// GraphQL query to fetch user's contributions
const GET_USER_STREAK = gql`
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
            }
          }
        }
      }
    }
  }
`;

// Function to fetch live streak data using GraphQL
async function fetchStreakData() {
  try {
    const { data } = await client.query({
      query: GET_USER_STREAK
    });
    return data.viewer.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error('Error fetching streak data:', error);
    return null;
  }
}

// Function to update graph on website
async function updateGraph() {
  const streakData = await fetchStreakData();
  if (streakData !== null) {
    // Update graph with streak data
    console.log('Streak data:', streakData);
  } else {
    console.log('Failed to fetch streak data.');
  }
}

// Execute updateGraph function
updateGraph();
