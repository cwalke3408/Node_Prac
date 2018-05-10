
const express = require('express');
const app = express();

// app.get takes 2 args:
// 1. The endpoint with verb
// 2. callback to run upon request for that route

app.get('/', (req, res) => {
    res.send('Hello, San Diego');
});

app.listen(3000);
console.log(`App is listening on port 3000`);