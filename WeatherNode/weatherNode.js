const http = require('http');

const apiKey = `17e5afe2d21ac46d86d150b023071652`;
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apiKey;

// This file, node is the requester, not the reponder
// the http.get method takes 2 args:
// 1. WHERE (endpoint)
// 2. Code to run when back, with the data as a param
const request = http.get(weatherUrl, (theResponse) => {
    //console.log(theResponse);

    // .on takes 2 args:
    // 1. What event to do X on
    // 2. callback to run, when event happens
    let weatherData = ``;
    theResponse.on('data', (chunkofData) => {
        console.log(chunkofData);
        console.log(`\n`);
        weatherData += chunkofData;
    });

    theResponse.on('end', () => {
        //console.log(weatherData);
        console.log(JSON.parse(weatherData));
    });
});