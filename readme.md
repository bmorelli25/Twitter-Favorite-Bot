## Twitter Favorite Bot

This bot returns 10 tweets for a specified search query then favorites each of the returned tweets.

---

### How to use
* Star and download the repository
* run `npm install` to install the needed dependencies
* Copy the file `config.default.js`, rename it to `config.js` and then change its values - this file will store the configuration details for the Twitter API. 

The structure should be the following:
```js
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}
```

* Visit the [Twitter API](https://apps.twitter.com/app/new) and fill out the form. When done, click on the _Keys and Access Tokens_ tab to view your consumer key/secret and access token key/secret. Copy these keys/secrets into your `config.js` file.
* In `app.js` you can edit the `params` variable to determine what to search for:
```
var params = {
  q: 'SEARCH_QUERY_HERE', //search query
  count: 10, //number of tweets to return
  result_type: 'recent', //shows recent tweets
  lang: 'en' //language English
}
```

* Now we're ready! Open up the command prompt and type `npm start` to run the application.
