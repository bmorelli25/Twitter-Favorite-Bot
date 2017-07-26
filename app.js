const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

// Set up your search parameters
const params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, (err, data, response) => {
  // If there is no error, proceed
  if(err){
    return console.log(err);
  }

  // Loop through the returned tweets
  const tweetsId = data.statuses
    .map(tweet => ({ id: tweet.id_str }));

  tweetsId.map(tweetId => {
    T.post('favorites/create', tweetId, (err, response) => {
      if(err){
        return console.log(err[0].message);
      }

      const username = response.user.screen_name;
      const favoritedTweetId = response.id_str;
      console.log(`Favorited: https://twitter.com/${username}/status/${favoritedTweetId}`);

    });
  });
})
