var express = require('express')
var app = express()
const path = require('path');
const port = process.env.PORT || 3000

app.get('/', async(req, res) => {
//   res.send('hello world')
  res.sendFile(path.join(__dirname, 'index.html'));
//   res.sendFile(path.join(path.join(__dirname, 'html', 'childHtml'), 'index.html'));
})

app.listen(port, ()=>{
    console.log("directory =",__dirname)
    console.log(`app listening on port ${port}`)
})