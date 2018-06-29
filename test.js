'use strict'

const github = require('./src/github')
const twitter = require('./src/twitter')
const expect = require('chai').expect

describe('Github module', () => {
  describe('"getRepositoriesByName"', () => {
    it('should export a function', () => {
      expect(github.getRepositoriesByName).to.be.a('function')
    })
    it('should return a promise ', () => {
      var result = github.getRepositoriesByName("football", 1)
      expect(result.then).to.be.a('function')
      expect(result.catch).to.be.a('function')
    })
    it("should return an array", () => {
      return github.getRepositoriesByName("football", 1)
        .then(data => {
          expect(data).to.be.a('array')
        })
        .catch(err => {
          expect(err).to.be.a('undefined')
        })
    })
    it("invalid url should return an error message", () => {
      return github.getRepositoriesByName("", 1)
        .then(data => console.log("dataaa,", data))
        .catch(function (err) {
          expect(err).to.be.a('object')
          expect(err.message).to.be.a('string')
        })
    })
  })
})
describe('Twitter module', () => {
  describe('"getRepositoriesByName"', () => {
    it('should export a function', () => {
      expect(twitter.searchTweetByWord).to.be.a('function')
    })
    it('should return a promise ', () => {
      var result = twitter.searchTweetByWord("football")
      expect(result.then).to.be.a('function')
      expect(result.catch).to.be.a('function')
    })
    it("should return an array", () => {
      return twitter.searchTweetByWord("football")
        .then(data => {
          expect(data).to.be.a('array')
        })
        .catch(err => {
          expect(err).to.be.a('undefined')
        })
    })
    it("should return an error", () => {
      return twitter.searchTweetByWord("")
        .then(data => {
          expect(data).to.be.a('undefined')
        })
        .catch(err => {
          expect(err).to.be.a('object')
          expect(err.message).to.be.a('string')        
        })
    })
  })
})