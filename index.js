const request = require('request')
const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/json');
    let search = req.url
    if(search === '/favicon.ico'){
        return
    } else {
        search = search.substr(1,search.length)
    }
    console.log(search)
    var options = {
        method: 'GET',
        url: 'https://affiliate-api.flipkart.net/affiliate/1.0/search.json',
        qs: { query: search, resultCount: '1' },
        headers:
        {
            'Postman-Token': '8c04b704-23a4-4cc7-af5e-fd7f0c46743f',
            'cache-control': 'no-cache',
            'Fk-Affiliate-Token': '37aab18a3e8e48da95f50ee7e1a6d951',
            'Fk-Affiliate-Id': 'prasanta13'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.end(body);
    });
});

server.listen(port);