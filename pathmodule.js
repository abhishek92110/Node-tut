const path = require('path')

const abasename = path.basename('C:\\Users\\Dell\\Downloads\\wwwrootupdated\\wwwrootupdated\\wwwroot\\course\\graphic-designing-training-course-in-adoni.html')

const dirbasename = path.dirname('C:\\Users\\Dell\\Downloads\\wwwrootupdated\\wwwrootupdated\\wwwroot\\course\\graphic-designing-training-course-in-adoni.html')

const extname = path.extname(__filename)

console.log('path =',abasename)
console.log('dir name =',dirbasename)
console.log('ext name =',__filename,extname)