#!/usr/bin/env node

var program = require('commander');
var twitter = require('./src/twitter');
var github = require('./src/github');

const DEFALUT_SEARCH = 'football';
const DEFAULT_LIMIT = 10;

//COMAND LINE INTERFACE
program
    .version('0.0.1')
    .option('-s , --search_item [key]', 'Word to be searched in github. Default "football"')
    .option('-l , --limit [number]', 'Limit number of repositories')
    .parse(process.argv);

var searchWord = program.search_item || DEFALUT_SEARCH;
var limitRepo = program.limit || DEFAULT_LIMIT;

console.log(`Looking for maximun of ${limitRepo} repositores with ${searchWord}`);
github.getRepositoriesByName(searchWord, limitRepo)
    .then(repositories=> {
        //Ramdon sort
        repositories.sort(() => Math.random() - 0.5)
        //Keep just the first 'limitRepo' elements
        repositories.splice(limitRepo);
        repositories.forEach(repo => {
            console.log(repo.html_url)
            twitter.searchTweetByWord(repo.html_url)
            .then(tweets => {
                console.log("++++++++++++++++++++++++++++",repo.html_url,"++++++++++++++++++++++++++++")
                if (tweets.length == 0) console.log( "This repositorie has not tweets")
                else {
                    tweets.forEach(tweet => {
                        console.log(">>>>>>>>>>>>>>>TWEET OF @",tweet.user.screen_name, "<<<<<<<<<<<<<\n", tweet.full_text)
                        console.log("--------------------END TWEET-------------------\n")
                    });
                }
                console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",'\n')
            })
            .catch(error => console.log(error))
        });
    })

    .catch(error =>{console.log})