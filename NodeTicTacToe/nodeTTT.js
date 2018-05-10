const http = require('http');
const fs = require('fs');

// function myHtml(){
//     // res.end(ticTacToe);    
// }

// function myJs(){

// }

// function myCss(){

// }

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        //const a = myHtml();
        // const b= myCss();
        // const c = myJs();

        res.writeHead(200, {'content-type':'text/html'});
        const ticTacToe = fs.readFileSync('./ticTacToe.html');

        res.end(ticTacToe);

    } else if(req.url === '/ticTacToe.css'){
        res.writeHead(200, {'content-type':'text/css'});
        const cssType = fs.readFileSync('./ticTacToe.css');
        res.end(cssType);
    } else if(req.url === '/ticTacToe.js'){
        res.writeHead(200, {'content-type':'application/javascript'});
        const tttJS = fs.readFileSync('./ticTacToe.js');
        res.end(tttJS);

    }else {
        console.log(req.url + ` was not found`);
        res.writeHead(404, {"content-type":"text/html"});
        res.write(`<h1>Requested page not found!</h1>`);
        res.end(`Page is not found`);
    }
});

server.listen(3030);
console.log(`Server is listening on port 3030...`);