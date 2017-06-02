## Twitter Favorite Bot

Read all about this project and follow the tutorial on Medium: [Build a simple Twitter Bot with Node.js in just 38 lines of code](https://hackernoon.com/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078)
This bot returns 10 tweets for a specified search query then favorites each of the returned tweets.

---

### How to use
* Star and download the repository
* run `npm install` to install the needed dependencies
* Create a file named `config.js` - this file will store the configuration details for the Twitter API. The structure should be the following:
```
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}
```
* Visit the [Twitter API](https://apps.twitter.com/app/new) and fill out the form. When done, click on the Keys and Access Tokens tab to view your consumer key/secret and access token key/secret. Copy these keys/secrets into your `config.js` file.
* In `app.js` you can edit the `params` variable to determine what to search for:
```
var params = {
  q: 'SEARCH_QUERY_HERE', //search query
  count: 10, //number of tweets to return
  result_type: 'recent', //shows recent tweets
  lang: 'en' //language English
}
```
* Now we're ready! Open up the command prompt and type `node app.js` to run the application.
