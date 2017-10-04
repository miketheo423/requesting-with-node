'use strict'

function get(film)  {
const keys = require('./env.js');
const request = require('request');
const apiUrl = 'https://www.googleapis.com/customsearch/v1?key=' + keys.apiKey + '&cx=' + keys.iD + '&q=' + film;

// Requests the snippets from the first search object in Items array
request(apiUrl, function(error, response, body) {
	console.log(JSON.parse(body).items[0].snippet);
});

// Reqyests the links from the first search object in the Items array
request(apiUrl, function(error, response, body) {
	console.log(JSON.parse(body).items[0].link);
});

}

// Module should export the get movie function
// module.exports = get(film);

module.exports = get;