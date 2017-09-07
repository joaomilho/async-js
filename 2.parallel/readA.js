const fs = require('fs')

const a = fs.readFileSync('files/a.json', 'utf8')
process.send(a)
