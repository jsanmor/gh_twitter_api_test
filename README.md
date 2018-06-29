# Description
Project for testing purposes of Github API and Twitter API.

# Instrucctions for run it
Rename `twitterCredentials.settings` to `twitterCredentials.json` and fill it with your Twitter API credentials

`npm install`

`npm start`

## CLI options

`node index.js [options]`

    -V, --version              output the version number
    -s , --search_item [word]  Word to be searched in github. Default "football"
    -l , --limit [number]      Limit number of repositories for search in Twitter. Default is 10
    -h, --help                 output usage information
## Run test

`npm test`

# Considerations
* The subset of repositories are selected randomly
* I have not practice with test in js, but I just learned for this sample

# Posible future work
* Try to search more than one repositorie in each request to twitter API
* Exposure this in a REST API to be comsumed for a web based UI (with Express)
* Make a web based UI (vue.js or Angular), my CLI output sucks
