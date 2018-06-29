'use strict'

const twitterCredentials = require('./../twitterCredentials.json')
var twitter = require('twitter');

//Crate twitter object to help us with auth
var twitterClient = new twitter(twitterCredentials);

/**
 * 
 * @param {String} searchItem Item that will be searched in tweets
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
//TODO make only one request


module.exports = { searchTweetByWord }