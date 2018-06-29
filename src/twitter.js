'use strict'

const twitterCredentials = require('./../twitterCredentials.json')
var twitter = require('twitter');

//Create twitter object to help with auth
var twitterClient = new twitter(twitterCredentials);

/**
 * Return a promise with an array of tweets that included the search item
 * @param {String} searchItem 
 * @returns {Promise} A promise with data or error
 */
  function searchTweetByWord(searchItem) {
    return new Promise(function (resolve, reject) {
        var params = { q: searchItem, tweet_mode: "extended" };
        twitterClient.get(`search/tweets`, params, function (error, tweets, response) {
            if (!error) resolve(tweets.statuses);
            else reject(error[0]);
        });
    })
}

module.exports = { searchTweetByWord }