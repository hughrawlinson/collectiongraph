const {SpotifyGraphQLClient} = require('spotify-graphql');
const config = require('./config');

SpotifyGraphQLClient(config).query(`
  {
    me {
      tracks (first: 10) {
        track {
          id
          name
          artists {
            id
            name
          }
          album {
            id
            name
          }
        }
      }
    }
  }
`).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
