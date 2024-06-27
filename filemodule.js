const fs = require('fs');


// fs.readFileSync('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

const a = fs.readFileSync('file.txt')
console.log("file content =",a.toString())

// fs.writeFileSync('file.txt', 'this is newly created file',()=>{
//     console.log('content written in this')
// })

console.log("file read")



