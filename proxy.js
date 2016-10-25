const http = require('http');
const fetch = require('isomorphic-fetch');
http.createServer((req, res) => {

  if(req.url.indexOf('/favicon.ico') < 0) {


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    fetch(`https://realtime.thetrainline.com${req.url}`)
    .then((response) => response.text())
    .then((data) => res.end(data.replace(/https:\/\/realtime.thetrainline.com/g, 'http://localhost:9090')))
    .catch((error) => res.end(error.stack));
  }


})
.listen(9090, () => console.log("Server listening on: http://localhost:%s", 9090));
