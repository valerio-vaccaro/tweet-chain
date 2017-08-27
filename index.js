const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const program = require('commander');



// Parse parameters

var pageToVisit = "";
var height = 0;
var debug = false;
var pageToLink = "";

program
    .version(require('./package.json').version)
    .option('-v, --verbose', 'Show intermediate tweet')
  	.option('-t, --tweet [link]', 'Tweet selected')
    .parse(process.argv);

if (program.tweet == undefined){
	program.help();
	return;
} else {
	pageToVisit = program.tweet;
}

if (program.verbose !== undefined ){
	debug = true;
}



if (debug){
	console.log("Visiting page: " + pageToVisit);
}

var parse = function (error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     if(debug){
     	console.log("Url: "+pageToVisit);
     	console.log("Height: "+height);
     	console.log("Title:  " + $('title').text());
     	console.log("Link: "+$('.QuoteTweet-link').attr('href'));
     }
     height++;
     var pageToLink = "https://twitter.com"+$('.QuoteTweet-link').attr('href');
     if(pageToLink !== undefined){
     	request(pageToLink, parse);
     }
     
   } else {
   	 console.log("Status code: " + response.statusCode);
   }
};
   
request(pageToVisit, parse);

console.log("Visit tweet: "+pageToVisit);
console.log("Genesis tweet: "+pageToLink);
console.log("Height: "+height);