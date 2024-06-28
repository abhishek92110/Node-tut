const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')

    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1>this is the home page</h1>');
    }

    else if(req.url=='/about')
        {
            res.statusCode = 200;
            res.end('<h1>this is the about page</h1>');
        }
    else if(req.url=='/hello')
        {
            res.statusCode = 200;
            const helloPage = fs.readFileSync('./index.html')
            res.end(helloPage);
        }

        else{
            res.statusCode = 404;
            res.end('<h1>the page is not found</h1>');

        }

})

server.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})