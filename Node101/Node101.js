//import { STATUS_CODES } from "http";

// When we want to make a new module
// npm init
// npm test
// npm install --save {p2}  


// At the top put your required node modules
// Require is kind of like the node version of <script>

// http is part of node core! We don't have to install or ask for
// It comes with Node. Just require.
// Node is like a mr potato head man doll. 
// Node can run lean! It doesnt come with bulk ware.
const http = require("http");

// fs = file system. fs gives node access to the computer its running on
// part of noe. No need to install. It gives node access to the file
// system on THIS computer.  The computer running the js file
const fs = require("fs");

// create Server takes 2 args:
// 1. request
// 2. repsonse
const server = http.createServer((req, res) => {

    console.log(req.url);

    if(req.url === '/'){
        // writeHead takes 2 minimum of 2 args:
        // 1. status code 
        // 2. mimi-type of whatever is being sent back
        res.writeHead(200, {"content-type" : `text/plain`});
       // res.writeHead(200, {"content-type" : `text/html`});
        res.write(`<h1>Server responding </h1>`);

        // Will tell the browser We'll done
        res.end();
    } else{
        res.writeHead(404, {"content-type" : `text/plain`});
        //res.writeHead(200, {"content-type" : `text/html`});
        res.write(`<h1>Requested page not found! </h1>`);
        res.end();
    }
});

// Tell the server we created with the http objectc to listen
// for http traffic (duh) on port 8080;
// When a request comesin on port 8080, via http, the callback </anon>
// function in creae Server will fire off with the reqw and res objects availble
server.listen(8080);
