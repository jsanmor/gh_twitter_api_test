'use strict'

//Since Github API don't require auth is as simple as make an HTTP request, in this case with axios module help.
const axios = require('axios');
const GITHUB_URL = 'https://api.github.com/search/repositories?q=';

/**
 * Search repositories in github that contains a particular word in the name
 * @param {String} searchItemGH String to be searched in github repositories
 * @returns {Promise} That contains array of repositories info, or an error message
 */
function getRepositoriesByName(searchItemGH) {
    return new Promise(function (resolve, reject){
        axios.get(GITHUB_URL + searchItemGH)
        .then(response => {resolve(response.data.items)})
        .catch(error => reject(error.response.data));
    });
}

module.exports = {
    getRepositoriesByName
}