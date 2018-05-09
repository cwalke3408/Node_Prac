const http = require('http');
const fs = require(`fs`);

//function renderHomePage(req, res){
function renderHomePage(){
    // res.writeHead(200, {
    //     'content-type':'text/html'

    // });

    // res.end(`<h1>Your page has loaded</h1>`);
}

// Params -> request and respond
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        renderHomePage(req, res);
        res.end(renderHomePage());
    } else if(req.url === '/gotCramps.jpg'){
        res.writeHead(200,{'content-type':'image/jpg'});
        const img = fs.readFileSync('gotCramps.jpg');
        res.end(img);;
    } else {

        res.end(`Page is not found`);
    }
});

// Params -> port number
server.listen(3000);
console.log(`Server is listening on port 3000...`);